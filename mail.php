<?php

$nome  = $_POST['name'];
$email = $_POST['email'];
$msg   = $_POST['msg'];
$cel   = $_POST['cel'];
//$arquivo   = $_FILES["arq"];
date_default_timezone_set('America/Sao_Paulo');
$date = date('d/m/Y H:i');

$corpoMSG = "<strong>Nome: </strong>{$nome} </br>
                        <strong>Telefone: </strong>{$cel} </br>
                        <strong>E-mail: </strong>{$email} </br>
                        <strong>Mensagem: </strong>{$msg} </br>
                        <strong>Data: </strong>{$date} </br>";
// chamada da classe       

include_once 'PHPMailer/class.smtp.php';
include_once 'PHPMailer/class.phpmailer.php';

// instanciando a classe
$mail   = new PHPMailer();
$mail->CharSet = "utf-8";
$mail->IsSMTP();
$mail->Host = "smtp-mail.outlook.com";
$mail->SMTPAuth = true;
$mail->Username = "nei.saldanha@hotmail.com";
$mail->Password = "";
$mail->SMTPSecure = "ssl"; // ou tls
$mail->Port = 587;
// email do remetente
$mail->SetFrom('nei.saldanha@hotmail.com', 'Atendimento Site');
// email do destinatario
$address = "nei.saldanha@hotmail.com";
$address1 = "neiac21@gmail.com";
$mail->AddAddress($address, $address1);
//$mail->AddAddress($address1);
// assunto da mensagem
$mail->Subject = "Contato de  - $nome";
// corpo da mensagem
$mail->MsgHTML($corpoMSG);
// anexar arquivo
//$mail->AddAttachment($arquivo['tmp_name'], $arquivo['name']  );

if ($mail->Send()) {
  echo "
                      <META HTTP-EQUIV=REFRESH CONTENT = '0;URL=index.html'>
                      <script type=\"text/javascript\">
                        alert(\"Obrigado pela preferência! Entraremos em contato em breve.\");
                      </script>
                    ";
} else {
  echo "
                    <META HTTP-EQUIV=REFRESH CONTENT = '0;URL=index.html'>
                      <script type=\"text/javascript\">
                        alert(\"E-mail não enviado.\");
                      </script>";
}
