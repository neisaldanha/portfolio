<?php
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
//use PHPMailer\PHPMailer\Exception;
//require 'vendor/autoload.php';

date_default_timezone_set('America/Sao_Paulo');
$date = date('d/m/Y H:i');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Load Composer's autoloader
require 'vendor/autoload.php';
// Variables
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['msg']);
$contact_num = trim($_POST['cel']);
$msg='';
$contact_num = str_replace(" ","",$contact_num);
$contact_num = str_replace("-","",$contact_num);
$contact_num = str_replace('(',"",$contact_num);
$contact_num = str_replace(')',"",$contact_num);

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp-mail.outlook.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'nei.saldanha@hotmail.com';
$mail->Password = 'kaNE3110**';
$mail->SetFrom('nei.saldanha@hotmail.com','Atendimento');
$mail->AddAddress('nei.saldanha@hotmail.com','Atendimento');
if ($mail->addReplyTo('nei.saldanha@hotmail.com','Atendimento')) {
	$mail->Subject = "Avaliação";
	$mail->isHTML(false);
	$mail->Body = <<<EOT
    Email: {$email}
    Name: {$name}
    Phone:{$contact_num}
    Message: {$message}
EOT;
	if (!$mail->send()) {
		echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
		echo"
            <script type=\"text/javascript\">
                alert(\"E-mail enviado com sucesso.\");
            </script> ";
	}
} else {
	$msg = 'Share it with us!';
	
}
	
	
?>



