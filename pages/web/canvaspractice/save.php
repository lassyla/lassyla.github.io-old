<?php
$filename = $_REQUEST["name"].".txt"; 
$x = $_REQUEST["dotsx"]; 
$y = $_REQUEST["dotsy"]; 
$c = $_REQUEST["dotsc"]; 
$wrfile = fopen($filename, 'wr'); 
fwrite($wrfile, $x);
fwrite($wrfile, "\n".$y);
fwrite($wrfile, "\n".$c);
?>