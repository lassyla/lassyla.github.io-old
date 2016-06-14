<?php
//make sure urls do not repeat

$db = new PDO("sqlite:pages.db") or die("cannot connect");
$url = $_REQUEST["url"];
$pass = $_REQUEST["password"]; 

$sql = "select pword from urls where url = '$url'"; 
foreach ($db->query($sql) as $row){
    $results[] = array($row["pword"]);
}
if($pass == $results[0][0])
    echo json_encode("yes");
else
    echo json_encode("incorrect password!");
?>
