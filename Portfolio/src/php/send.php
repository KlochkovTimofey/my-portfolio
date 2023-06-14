<!-- Переменные -->
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = trim($email);
echo $email;
if(mail('klochkov.timofey.s@gmail.com', 'Данные с сайта портфолио', $email, 'klochkov.timofey.s@gmail.com')) {
    echo'Сообщение успешно отправленно';
}
else {
    echo'Ошибка при отправки данных';
}