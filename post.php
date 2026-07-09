<?php
// Разрешаем только POST-запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

// ============================================
// ПРОВЕРКА reCAPTCHA v3
// ============================================
$recaptchaSecret = 'ТВОЙ_SECRET_KEY'; // ← мой Secret Key
$recaptchaToken = $_POST['recaptcha_token'] ?? '';

if (empty($recaptchaToken)) {
    header('Location: contact.html?sent=error');
    exit;
}

// Проверяем токен через API Google
$verifyResponse = @file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?' . http_build_query([
        'secret'   => $recaptchaSecret,
        'response' => $recaptchaToken,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ])
);

if ($verifyResponse === false) {
    header('Location: contact.html?sent=error');
    exit;
}

$verifyData = json_decode($verifyResponse, true);

// Проверяем результат и score (для v3)
if (!$verifyData['success'] || ($verifyData['score'] ?? 0) < 0.5) {
    header('Location: contact.html?sent=error');
    exit;
}

// ============================================
// 🍯 ПРОВЕРКА HONEYPOT
// ============================================
if (!empty($_POST['website_url'])) {
    // Тихо перенаправляем — бот думает, что всё ок
    header('Location: /?sent=success');
    exit;
}

// ============================================
// ПОЛУЧЕНИЕ И ВАЛИДАЦИЯ ДАННЫХ
// ============================================
$to = "pheb@list.ru";
$subject = "Новая заявка с сайта pheb.ru";

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

$errors = [];

if (empty($name)) {
    $errors[] = "Имя не указано";
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Некорректный email";
}

if (empty($phone)) {
    $errors[] = "Телефон не указан";
}

if (empty($message)) {
    $errors[] = "Сообщение пустое";
}

// Защита от инъекций заголовков
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = "Обнаружена попытка инъекции";
}

if (!empty($errors)) {
    header('Location: contact.html?sent=error');
    exit;
}

// ============================================
// ФОРМИРОВАНИЕ И ОТПРАВКА ПИСЬМА
// ============================================
$body = "Получена новая заявка с сайта pheb.ru\n\n";
$body .= "Имя: " . htmlspecialchars($name) . "\n";
$body .= "Email: " . htmlspecialchars($email) . "\n";
$body .= "Телефон: " . htmlspecialchars($phone) . "\n\n";
$body .= "Сообщение:\n" . htmlspecialchars($message) . "\n\n";
$body .= "---\n";
$body .= "Дата: " . date('d.m.Y H:i:s') . "\n";
$body .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
$body .= "reCAPTCHA score: " . ($verifyData['score'] ?? 'N/A');

$headers = "From: no-reply@pheb.ru\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$send = mail($to, $subject, $body, $headers);

if ($send) {
    header('Location: /?sent=success');
    exit;
} else {
    header('Location: /?sent=error');
    exit;
}
?>