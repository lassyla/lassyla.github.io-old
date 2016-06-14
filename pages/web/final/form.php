<?php
//make sure urls do not repeat
$db = new PDO("sqlite:pages.db") or die("cannot connect");
$desc = $_POST["desc"];
$pword= $_POST["pword"]; 
$pwordhint = $_POST["pwordhint"]; 
$content = $_POST["content"]; 

$file = explode("\n", file_get_contents("count.txt"));
$id = intval($file[0]) + 1;
file_put_contents("count.txt", $id);
$characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
$url = '';
$url .= $characters[rand(0, 25)];
for ($i = 0; $i < 7; $i++) {
    $url .= $characters[rand(0, strlen($characters) - 1)];
}
$command = "INSERT INTO urls(desc, url, pword, pwordhint) VALUES ('$desc', '$url', '$pword', '$pwordhint');";
$db->exec($command);
print($command); 
$command = "CREATE TABLE $url (message VARCHAR, tags VARCHAR, accepted INTEGER, color VARCHAR, viewed INTEGER);";
#$db->exec($command);
print($command); 
$db->exec($command);
header('Location: ' . "/~2017alee/final/roomtemp.html#$url");


//$filename = "pages/" . $url . ".html"; 
//$wrfile = fopen($filename, 'wr'); 
//fwrite($wrfile, $content);
////header('Location: ' . $filename);
?>

