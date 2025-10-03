<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$myemail = 'laisa.rioverde@gmail.com';

$name = $_POST['name'] ?? '';
$subject = $_POST['subject'] ?? '';
$email_address = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$email_body = "Nome: $name \nEmail: $email_address\nMensagem: $message";
$headers = "From: $myemail\r\n";
$headers .= "Reply-To: $email_address";

file_put_contents('debug.txt', print_r($_POST, true));

if(mail($myemail, $subject, $email_body, $headers)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false, "error" => "Falha ao enviar o email"]);
}
?>