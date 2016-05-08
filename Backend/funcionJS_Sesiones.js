function discover(cine) {
    // 28 sesiones, 4 por dia
    var sesiones = [];
    <!---PHP FROM HERE -->
    <?php
        //$cine = "<script>document.getElementByID('cine').value</script>";
        $servername = "localhost";
        $username = "cines";
        $password = "backend";
        $dbname = "cines";
        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        //if($cine == "Cinesa"){
        $sql = "SELECT s1, s2, s3, s4 FROM CINESA";
        $result = $conn->query($sql);
        $s1 = $s2 = $s3 = $s4 = NULL;
        $arr = array();
        while($row = $result->fetch_assoc()) {
            if !(is_null($row["s1"])){
                $s1 = $row["s1"];
            }
            $arr[] = $s1;
            if !(is_null($row["s2"])){
                $s2 = $row["s2"];
            }
            $arr[] = $s2;
            if !(is_null($row["s3"])){
                $s3 = $row["s3"];
            }
            $arr[] = $s3;
            if !(is_null($row["s4"])){
                $s4 = $row["s4"];
            }
            $arr[] = $s4;
        }
        //}   

    ?>
    var sesiones = <?php echo json_encode($arr)?>;
    return sesiones;
}