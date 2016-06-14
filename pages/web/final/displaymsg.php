<?php
//make sure urls do not repeat
$db = new PDO("sqlite:pages.db") or die("cannot connect");
$url = $_REQUEST["url"];
$sql = "SELECT * FROM $url";
$result = $db->query($sql);
if($result==FALSE){
    echo json_encode("dne"); 
    exit(0); 
}
foreach ($db->query($sql) as $row){
    $results[] = array($row["message"], $row["tags"], $row["accepted"], $row["color"], $row["viewed"]);
}
echo json_encode($results);

?>

