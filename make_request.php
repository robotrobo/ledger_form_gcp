<?php
$name = $_GET('name'); 
$string = ('python3 /var/www/html/import_Ledger.py '.escapeshellarg($name));
$ans = shell_exec($string);
echo $ans;
?>