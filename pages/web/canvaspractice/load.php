<?php
$filename = $_REQUEST["name"]; 
if(file_exists($filename.".txt")){
	$list = file_get_contents($filename.".txt");
	$values = explode("\n", $list);
	echo json_encode($values); 
}
else{
	echo json_encode("no");
}
?>