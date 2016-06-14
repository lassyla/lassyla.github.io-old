<?php
//make sure urls do not repeat
$db = new PDO("sqlite:pages.db") or die(json_encode("cannot connect"));
$message = $_POST["message"];
$tags = $_POST["tags"]; 
$color = $_POST["color"];
$url = $_POST["url"];

$command = ("INSERT INTO $url (message, tags, accepted, color, viewed) VALUES ('$message', '$tags', 1, '$color', 0);"); 
$db->exec($command);
header('Location: ' . "/~2017alee/final/roomtemp.html#$url");
?>