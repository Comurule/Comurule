<?php
echo ('Hello, ' . $_POST['lname'] . ' ' . $_POST['fname'] . ',<br/>' );
$name = $_POST['fname'] . $_POST['lname'] . ".txt";
$txt = implode('
', $_POST);

$file = fopen($name, 'w') or die('Unable to Open file');

fwrite($file, $txt);
fclose($file);
echo "Your Data is saved Successfully";
?>