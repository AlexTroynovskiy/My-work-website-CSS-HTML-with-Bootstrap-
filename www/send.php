<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';
require 'phpMailer/src/SMTP.php';

if((isset($_POST['username'])&&$_POST['username']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $subject = 'Заказ с сайта APPLEHOUSE'; //Загаловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                <h1>'.$_POST['username'].' ('.$_POST['phone'].')</h1>
                ';
    if(isset($_POST['order'])  && $_POST['order'] != "")
    {
        $message .= '<p><strong>Заказ</strong>: '.$_POST['order'].'</p>';
    }
    $message .= '</body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги

    $mail = new PHPMailer(true);

    try{
        $mail->isSMTP();
        $mail->Host = 'mail.adm.tools';
        $mail->SMTPAuth = true;
        $mail->Username = 'support@applestock.od.ua';
        $mail->Password = '9bU15fCAh8Ga';
        $mail->SMTPSecure = 'ssl';
        $mail->CharSet = 'UTF-8';
        $mail->Port = 465;

        $mail->setFrom('support@applestock.od.ua', 'Support | APPLEHOUSE');
        $mail->addAddress('max0109231@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
    }
    catch (Exception $e) {
        echo $mail->ErrorInfo;
    }
}

?>