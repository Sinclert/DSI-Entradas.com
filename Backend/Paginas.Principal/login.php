<!---PHP FROM HERE -->
<?php

$usr = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  	$usr = test_input($_POST["usr"]);
  	$password = test_input($_POST["pass"]);
	// Connection with the data base
	$servername = "localhost";
	$username = "backend";
	$password = "backend";
	$dbname = "entradas";
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT usr, contra FROM Usuarios";
	$result = $conn->query($sql);

	$yes = 0;
	while($row = $result->fetch_assoc()) {
		// De nuevo los datos aquí se deben coger del código front-end
		if ($row["usr"] == $usr){
			$yes = 1;
			if ($row["contra"] == $password){
				redirect("MainLoginCorrecto.html");
				break;
			}
			else {
				redirect("MainLoginIncorrecto.html");
				break;
			}
		}
	}
	if ($yes == 0){
		redirect("MainUsuarioIncorrecto.html");
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
