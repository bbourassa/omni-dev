<?php

$to = 'bnbourassa@gmail.com';
$subject='Customer Inquiry';
$txt = $POST['message'];
$email = $_POST['email'];
$sender=$_POST['name'];

// mail($to, $subject, $txt, "From: $email");

require "../../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "relay.sendinblue.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port=587;

$mail->Username = "bnbourassa@gmail.com";
$mail->Password = "Iconic402!";

$mail->setFrom($email, $sender);
$mail->addAddress("bnbourassa@gmail.com", "Britney");

$mail->Subject = $subject;
$mail->Body = $txt;

$mail->send();

echo "email sent";

?>