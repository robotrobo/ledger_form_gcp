<?php 
$string = ('python3 /var/www/html/import_bal.py');
$ans = shell_exec($string);
echo $ans;
?>