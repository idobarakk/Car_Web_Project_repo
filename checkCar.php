<?php
$host = "localhost";
$user = "idobk_CarDB";
$pass = "123456";
$db = "idobk_CarDB";
$conn = new mysqli($host,$user,$pass,$db);

if ($conn->connect_error){
    die("connection failed:".$conn->connect_error);
}
$CheckNum=$_POST['CheckNum'];


$sql="SELECT * WHERE 'license_num'='$CheckNum'";
$result = $conn->query($sql);

if ($result==false){
  echo "can not submit the data. Error is: ".$conn->error;
}
else
echo "the data was submitted"
?>
