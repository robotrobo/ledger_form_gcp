<?php 
$name = $_GET['name'];
// echo $name;
// $string = ('py.exe C:\xampp\htdocs\import_ledger.py '.escapeshellarg($name));
$string = ('py.exe C:\inetpub\wwwroot\import_ledger.py '.escapeshellarg($name));
$ans = shell_exec($string);
echo $ans;
?>