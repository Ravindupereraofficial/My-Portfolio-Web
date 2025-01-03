<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = isset($_POST['first-name']) ? trim($_POST['first-name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';

    $to = "ravindurandika2004@gmail.com"; 
    $emailSubject = "New Message from Contact Form: $subject";
    $emailBody = "
        First Name: $firstName\n
        Email: $email\n
        Message: $message
    ";

    if (mail($to, $emailSubject, $emailBody)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
}
?>
