<?php 
$name = $_GET['name'];
$start = $_GET['start'];
$end = $_GET['end'];

$string = ('py.exe C:\inetpub\wwwroot\import_ledger.py '.escapeshellarg($name).' '.escapeshellarg($start).' '.escapeshellarg($end));
$ans = shell_exec($string);
echo $ans;
?>