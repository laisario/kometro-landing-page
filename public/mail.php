<?php
$myemail = 'contato@kometro.com.br';

$name = $_POST['name'];
$subject = $_POST['subject'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$email_body = "Nome: $name \nEmail: $email_address\nMensagem: $message";

$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";

mail($myemail, $subject, $email_body, $headers);
header('Location: /');
?>