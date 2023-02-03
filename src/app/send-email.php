<?php

if(isset($_POST['submit'])) {
    $to = 'bnbourassa@gmail.com';
    $subject='Customer Inquiry';
    $txt = $POST['message'];
    $email = $_POST['email'];
    $sender=$_POST['name'];
}

mail($to, $subject, $txt, "From: $email");

?>