<?php


if (isset($_POST['submit'])){

    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];




$mailTo = "maaislam@phoenixdesign.online";
$headers = "Form: ".$mailForm;
$txt = "You have received an email from " .$name.".\n\n".$message;

mail($mailTo, $mailFrom, $txt);
header("location:contactform.php?mailsend");
}
?>