<?php
$db = $db = new PDO("sqlite:results.db");
$name = $_POST["name"]; 
$birth = $_POST["birth"]; 
$state = $_POST["state"]; 
$city = $_POST["city"]; 
$zip = $_POST["zip"]; 
$category = $_POST["s1"];
$option = $_POST["s2"];
$db->exec("INSERT INTO feedback(name, birth, state, city, zip, category, option) VALUES ('$name', '$birth','$state','$city','$zip','$category','$option');");

print "<table border=1>";
print "<tr><td>Name</td><td>Birthday</td><td>State</td><td>City</td><td>ZIP</td><td>Option</td></tr>";
$result = $db->query('SELECT * FROM feedback');
if ($result == FALSE)
	print "error";
foreach($result as $row)
{
	print "<tr>";
	print "<td>".$row['name']."</td>";
	print "<td>".$row['birth']."</td>";
	print "<td>".$row['state']."</td>";
	print "<td>".$row['city']."</td>";
	print "<td>".$row['zip']."</td>";
	print "<td>".$row['option']."</td>";
	print "</tr>";

}

?>