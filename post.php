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


// 🍯 ПРОВЕРКА HONEYPOT
// Если поле website_url заполнено — это бот
if (!empty($_POST['website_url'])) {
    // Тихо перенаправляем на главную с "успешным" статусом
    // Бот думает, что всё ок, но письмо не отправляется
    header('Location: /?sent=success');
    exit;
}

// Получаем данные из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

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
    header('Location: /?sent=error');
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

// Возвращаем результат через редирект
if ($send) {
    header('Location: /?sent=success');
    exit;
} else {
    header('Location: /?sent=error');
    exit;
} 
?>
