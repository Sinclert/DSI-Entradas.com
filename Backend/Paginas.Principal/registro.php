<!---PHP FROM HERE -->
<?php

$usr = $password = $mail = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  	$usr = test_input($_POST["usr"]);
  	$password = test_input($_POST["pass"]);
  	$mail = test_input($_POST["correo"]);
	// Connection with the data base
	$servername = "localhost";
	$username = "backend";
	$password = "backend";
	$dbname = "entradas";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	// Inserción de nuevos usuarios, los datos deben cogerse del código front-end
	$sql = "INSERT INTO Usuarios (usr, mail, contra)
	VALUES ('cinecine', 'cinecine@gmail.com', 'cinecine')";

	if ($conn->query($sql) === TRUE) {
		redirect("MainRegistroCorrecto.html");
	} else {
	    redirect("MainRegistroIncorrecto.html");
	}
	
	$conn->close();
}

function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
