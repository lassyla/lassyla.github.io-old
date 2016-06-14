<?php 
$wordlist = file_get_contents("CompleteScrabbleWordlist.txt");
$words = explode("\n", $wordlist); 
$rack = $_REQUEST["rack"];
$connect = $_REQUEST["connect"];
$pattern = "/^[" . $rack . "]*" . $connect . "[" . $rack . "]*$/";
$results = preg_grep($pattern, $words); 
$rackChars = str_split($rack . $connect); 
$repeat = array_count_values($rackChars); 
while(count($rackChars) > 0){ //while there are still letters that have not been checked, make a new filter for each letter
 	$letter = current(array_filter($rackChars)); //get the next letter
 	$filter = "/^[^" . $letter . "]*([^" . $letter . "]*" . $letter . "[^" . $letter. "]*){0," . $repeat[$letter] . "}$/";
    //filter should make sure that the letter only occurs $repeat times
 	$rackChars = array_diff($rackChars, array($letter)); 
 	$results = preg_grep($filter, $results); 
}
echo json_encode($results); 
?>