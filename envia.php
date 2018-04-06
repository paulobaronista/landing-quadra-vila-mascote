<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$msg = $_POST['mensagem'];
// multiple recipients
$to  = 'vendas@brev.com.br' . ', '; // note the comma
$to .= 'quadravilamascote@gmail.com';

// subject
$subject = 'Contato enviado pelo site www.apartamentovilamascote.com.br';

// message
$message = '
<html>
<head>
 <title>Contato via site www.apartamentovilamascote.com.br</title>
</head>
<body>
<table>

<tr>
  <td>Nome:&nbsp;'.$nome.'</td>
</tr>

<tr>
  <td>Email:&nbsp;'.$email.'</td>
</tr>

<tr>
  <td>Telefone:&nbsp;'.$tel.'</td>
</tr>

<tr>
  <td>Mensagem:&nbsp;'.$msg.'</td>
</tr>

</table>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: Leads Quadra <quadravilamascote@gmail.com>, Vendas Brev <vendas@brev.com.br>' . "\r\n";
$headers .= 'From: '.$nome.' <'.$email.'>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);
?>
<script language="javascript">
 window.location.replace("http://www.apartamentovilamascote.com.br/obrigado.html");
</script>