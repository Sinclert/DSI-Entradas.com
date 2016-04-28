/*Done by:
	DSI PROJECT GROUP NUMBER 4
*/

$(document).ready(function () {
    
    $("#datepicker").datepicker();
    
    $(document).mouseup(function (e){
        var login = $("#login");
        var register = $("#register");
        
        if (!login.is(e.target) && login.has(e.target).length == 0 && login.is(":visible")){
            login.hide();
            $("#header").css("filter", "none");
            $("#menu").css("filter", "none");
            $("#cuerpo").css("filter", "none");
        }
        
        if (!register.is(e.target) && register.has(e.target).length == 0 && register.is(":visible")){
            register.hide();
            $("#header").css("filter", "none");
            $("#menu").css("filter", "none");
            $("#cuerpo").css("filter", "none");
        }
        
    }); 
});


function show_login() {
    $("#register").hide();
    $("#login").show();
    $("#header").css("filter", "blur(5px)");
    $("#menu").css("filter", "blur(5px)");
    $("#cuerpo").css("filter", "blur(5px)");
}


function show_register() {
    $("#login").hide();
    $("#register").show();
    $("#header").css("filter", "blur(5px)");
    $("#menu").css("filter", "blur(5px)");
    $("#cuerpo").css("filter", "blur(5px)");
}


function validate_login() {
    var user = $("#usr_l");
    var password = $("#password_l");
    
    if (user.val() == ""){
        user.css("border", "1px solid red");
    }
    else {
        user.css("border", "1px solid grey");
    }
    
    if (password.val() == ""){
        password.css("border", "1px solid red");
    }
    else {
        password.css("border", "1px solid grey");
    }
}


function nextSection(n){
    if (n==1){
        $("#sectionBody_1").hide();
        $("#sectionBody_2").show();
    }
    
    else if(n==2){
        $("#sectionBody_2").hide();
        $("#sectionBody_3").show();
    }
}

function showSection(n){
    if (n==1){
        $("#sectionBody_1").toggle();
    }
    
    else if(n==2){
        $("#sectionBody_2").toggle();
    }
    
    else if(n==3){
        $("#sectionBody_3").toggle();
    }
}

//function move() {
//    var elem = document.getElementById("myBar"); 
//    var width = 1;
//    var id = setInterval(frame, 10);
//    function frame() {
//        if (width >= 100) {
//            clearInterval(id);
//        }
//        else {
//            width++; 
//            elem.style.width = width + '%'; 
//        }
//    }
//    alert("Hola");
//}