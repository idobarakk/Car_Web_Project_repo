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


$sql="SELECT count(*) FROM 'Cars' WHERE 'license_num'='$CheckNum'";

$result = $conn->query($sql);
echo $result;
if ($result > 0) {

  print "Exist";
} else {
    print "NotExist";  
}
$conn->close();
?>
