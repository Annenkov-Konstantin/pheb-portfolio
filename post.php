<?php
// Разрешаем только POST-запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

// Настройки
$to = "pheb@list.ru";
$subject = "Новая заявка с сайта pheb.ru";

// Получаем данные из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Защита от honeypot (если добавили скрытое поле)
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

// Валидация на стороне сервера
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

// Если есть ошибки — возвращаем ошибку
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Формируем тело письма
$body = "Получена новая заявка с сайта pheb.ru\n\n";
$body .= "Имя: " . htmlspecialchars($name) . "\n";
$body .= "Email: " . htmlspecialchars($email) . "\n";
$body .= "Телефон: " . htmlspecialchars($phone) . "\n\n";
$body .= "Сообщение:\n" . htmlspecialchars($message) . "\n\n";
$body .= "---\n";
$body .= "Дата: " . date('d.m.Y H:i:s') . "\n";
$body .= "IP: " . $_SERVER['REMOTE_ADDR'];

// Заголовки письма
$headers = "From: no-reply@pheb.ru\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправляем письмо
$send = mail($to, $subject, $body, $headers);


// Возвращаем результат через редирект (НЕ через JSON!)
if ($send) {
    header('Location: /?sent=success');
    exit;
} else {
    header('Location: /?sent=error');
    exit;
}

?>