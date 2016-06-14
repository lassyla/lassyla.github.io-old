<?php
//make sure urls do not repeat

$db = new PDO("sqlite:pages.db") or die("cannot connect");
$url = $_REQUEST["url"];
$pass = $_REQUEST["password"]; 

$sql = "select desc from urls where url = '$url'"; 
foreach ($db->query($sql) as $row){
    $results[] = array($row["desc"]);
}
echo json_encode($results[0][0]); 

?>
