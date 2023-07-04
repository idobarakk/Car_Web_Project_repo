<?php
$host = "localhost";
$user = "idobk_CarDB";
$pass = "123456";
$db = "idobk_CarDB";
$conn = new mysqli($host,$user,$pass,$db);

if ($conn->connect_error){
    die("connection failed:".$conn->connect_error);
}
$worker_num=$_POST['worker_num'];
$car_company=$_POST['car_Company'];
$car_model=$_POST['car_model'];
$car_color=$_POST['car_color'];
$license_num=$_POST['license_num'];
$worker_first_name=$_POST['first_name'];
$worker_last_name=$_POST['last_name'];
$worker_Phone=$_POST['phone'];


$sql="INSERT INTO `Cars` (`worker_num`, `car_company`, `car_model`, `car_color`, `first_name`, `last_name`, `phone`,`license_num`) VALUES ('".$worker_num."', '".$car_company."', '".$car_model."', '".$car_color."','".$worker_first_name."','".$worker_last_name."','".$worker_Phone."','".$license_num."' )";

if ($conn->query($sql)==false){
    echo "can not submit the data. Error is: ".$conn->error;
}
else
echo "the data was submitted"
?>




