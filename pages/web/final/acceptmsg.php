<?php
$db = new PDO("sqlite:pages.db") or die("cannot connect");
$url = $_REQUEST["url"];
$accepted = $_REQUEST["accepted"];
$idnum = $_REQUEST["idnum"] + 1;
$command = "UPDATE $url SET accepted=$accepted WHERE rowid=$idnum;";
$db->exec($command);
?>