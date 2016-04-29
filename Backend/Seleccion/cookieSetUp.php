<!---PHP FROM HERE -->
<?php

$cookie_name = "localizacion";
$cookie_value = $_GET['argument1'];

// La cookie durará un mes (30 días)
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

redirect("http://localhost/DSI-Project-master/Paginas/Principal/Main.php");

function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}


?>
