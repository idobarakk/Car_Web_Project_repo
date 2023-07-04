<?php
$host = "localhost";
$user = "idobk_CarDB";
$pass = "123456";
$db = "idobk_CarDB";
$conn = new mysqli($host,$user,$pass,$db);

if ($conn->connect_error){
    die("connection failed:".$conn->connect_error);
}
$carNumToRemove=$_POST['carNumToRemove'];



$sql="DELETE FROM `Cars` WHERE `license_num`='$carNumToRemove'";

if ($result->num_rows > 0) {
    echo "<table><tr><th>Worker Num</th><th>first Name</th><th></th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "<tr><td>" . $row["id"]. "</td><td>" . $row["firstname"]. " " . $row["lastname"]. "</td></tr>";
    }
    echo "</table>";
  } else {
    echo "0 results";
  }
  
  $conn->close();
  ?>