<!DOCTYPE html>

<!-- Done by: DSI PROJECT GROUP NUMBER 4 -->

<html>
    
    <?php
    $cookie_name = "localizacion";
    if(!isset($_COOKIE[$cookie_name])) {
        // Primera vez que se mete el usuario
        redirect("http://localhost/DSI-Project-master/Paginas/Seleccion/SeleccionLyR.html");
    } else {
        // La cookie ya existe
        $localizacion = $_COOKIE[$cookie_name];
    }

    function redirect($url, $statusCode = 303)
    {
       header('Location: ' . $url, true, $statusCode);
       die();
    }

    ?>

    <!-- Para usar la localizacion guardada en la cookie
     insertar esto: <?php echo $localizacion; ?>
     -->

    <head>         
        <title>Página Principal</title>
        <link rel="stylesheet" type="text/css" href="Main.css">
        <script type="text/javascript" src="../jquery-1.8.3.min.js"></script>
        <script type="text/javascript" src="main.js"></script>
        <meta charset="UTF-8">
    </head>



    <body>

        <div id="header">
            <div id="logo-div">
                <a href="../Principal/Main.html">
                    <img id="logo" src="images/logoentradas.png" alt="La imagen no pudo cargarse.">
                </a>
            </div>

            <div class="headerButton">
                <button id = "regButton" type="button" onclick = "show_register()">Regístrate</button>
            </div>

            <div class="headerButton">
                <button id = "initButton" type="button" onclick = "show_login()">Inicia Sesión</button>
            </div>
        </div>
        <div id = "menu">
            <table id = "menu-table">
                <tr>
                    <td><a href="../Cine/pagCine.html">Cine</a></td>
                    <td><a href="../Cine/pagCine.html">Musicales</a></td>
                    <td><a href="../Cine/pagCine.html">Teatros</a></td>
                    <td><a href="../Cine/pagCine.html">Conciertos</a></td>
                    <td><a href="../Cine/pagCine.html">Deportes</a></td>
                    <td><a href="../Cine/pagCine.html">Infantil</a></td>
                    <td><a href="../Cine/pagCine.html">Exposiciones</a></td>
                    <td><a href="../Cine/pagCine.html">Promociones</a></td>
                </tr>
            </table>

        </div>
        
        <div id="cuerpo">
        
            <table class="slidertable" style="margin:auto">
             <tr>
                 <td class="arrowbanner"><img id="arrowleft" class="arrow" src="images/arrowleft.png" alt="arrow"></td>
                 <td class="bg">
                     <div style="text-align:center" class="dots">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                        <span class="dot" onclick="currentSlide(4)"></span>
                     </div>
                     <div class="slider">
                         <div class="banner_css" style="display: inline-block;">
                                 <img class="slider_img" src="images/reyleon.png">
                         </div>
                         <div class="banner_css" style="display: inline-block;">
                                 <img class="slider_img" src="images/LVDA.png">
                         </div>
                         <div class="banner_css" style="display: inline-block;">
                                 <img class="slider_img" src="images/BVSS.png">
                         </div>
                         <div class="banner_css" style="display: inline-block;">
                                 <img class="slider_img" src="images/cleopatra.png">
                         </div>

                     </div>
                 </td>
                 <td class="arrowbanner"><img id="arrowright" class="arrow" src="images/arrow.png" alt="arrow"></td>
             </tr>
         </table>

         <div class="novedades">
             <div class="novBox">
                 <div class="tituloBox">
                     <p class="contentTitulo">Estrenos de Cine</p>
                 </div>
                 <div class="imgBox">
                     <img class="portadaBox" src="images/deadpool1.jpg">
                 </div>
             </div>
             <div class="novBox">
                 <div class="tituloBox">
                     <p class="contentTitulo">Novedades de Teatro</p>
                 </div>
                 <div class="imgBox">
                     <img class="portadaBox" src="images/deadpool2.jpg">
                 </div>
             </div>
             <div class="novBox">
                 <div class="tituloBox">
                     <p class="contentTitulo">Próximos Conciertos</p>
                 </div>
                 <div class="imgBox">
                     <img class="portadaBox" src="images/deadpool3.jpg">
                 </div>
             </div>
         </div>
        
        </div>
        
        
 
        
        <div class = "box" id="login">
            <form action="login.php" method="post">
                <h2>Iniciar Sesión</h2>
                    <ul>
                        <li>
                            <label>Usuario:<span>*</span> </label>
                            <input type="text" id="usr_l" name="usr"> 
                        </li>
                        <li>
                            <label>Contraseña:<span>*</span> </label>
                            <input type="password" name="pass" maxlength="8" id="password_l">
                        </li>
                    </ul>
                    <input type="submit" name="submitbtn" id="sbmt" class="btn2" value="Inicia Sesión">
            </form>
        </div>

            <div class="box" id="register">
                <form action="registro.php" method="post">
                    <h2>Registrarse</h2>
                    
                    <ul>
                        <li>
                            <label>Usuario:<span>*</span></label>
                            <input type="text" id="usr" name="usr" class="optional">
                        </li>
                        <li>
                            <label>Contraseña:<span>*</span></label>
                            <input type="password" name="pass" maxlength="8"
                            class="password">
                        </li>
                        <li>
                            <label>Repite la contraseña:<span>*</span></label>
                            <input type="password" name="rpass"   maxlength="8"
                                class="password">
                        </li>
                        <li>
                            <label>Correo Electrónico: <span>*</span></label>
                            <input type="text" name="correo" maxlength="30">
                        </li>
                        <li>
                            <label> Repite Correo Electrónico: <span>*</span></label>
                            <input type="text" name="correo" maxlength="30">
                        </li>
                    </ul>
                    <input type="submit" name="submitbtn2" id="sbmt2" class="btn2" value="Regístrate">
                </form>
            </div>

    </body>

</html>