<?php
 
// Importing DBConfig.php file.
include 'dbconfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$type = 'Break_Down';
 
// Populate User email from JSON $obj array and store into $email.
$plate = $obj['plate_num'];
$phone = $obj['phone'];
$describtion = $obj['describtion'];



 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into order_form (OrderType,Vehicle, Information) values ( '$type','$plate', 'phone :$phone , describtion : $describtion')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'request send  Successfully';
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
	 
$MSG = 'errrror ';
 

$json = json_encode($MSG);
 
 
 echo $json;
 
 }
 
 mysqli_close($con);
?>