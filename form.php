<?php
//get data from form  

$name = $_POST['name'];
$number= $_POST['number'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "abbasi.wrk@gmail.com";
$subject = "Mail From my siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiite";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message ." \r\n Number =" . $number ;

$headers = "From: noreply@saraabbasi.ir" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:../html/thankyou.html");
?>