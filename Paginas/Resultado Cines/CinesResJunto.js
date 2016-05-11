/*Done by:
	DSI PROJECT GROUP NUMBER 4
*/


$(document).ready(function () {
    
    $(document).mouseup(function (e){
        var login = $("#login");
        var register = $("#register");

        if (!login.is(e.target) && login.has(e.target).length == 0 && login.is(":visible")){
            login.hide();
            $("#header").css("filter", "none");
            $("#menu").css("filter", "none");
            $("#cuerpo").css("filter", "none");
            $("#header").css("-webkit-filter", "none");
            $("#menu").css("-webkit-filter", "none");
            $("#cuerpo").css("-webkit-filter", "none");
        }

        if (!register.is(e.target) && register.has(e.target).length == 0 && register.is(":visible")){
            register.hide();
            $("#header").css("filter", "none");
            $("#menu").css("filter", "none");
            $("#cuerpo").css("filter", "none");
            $("#header").css("-webkit-filter", "none");
            $("#menu").css("-webkit-filter", "none");
            $("#cuerpo").css("-webkit-filter", "none");
        }

    });
    
    $(document).ready(function(){
        $("#lista").click(function(){
            $("#lowersection").hide();
            $(".cuerpo_lista").show();
        });
        $("#cajas").click(function(){
            $(".cuerpo_lista").hide();
            $("#lowersection").show();
        });
    });

});


function show_login() {
    $("#register").hide();
    $("#login").show();
    $("#header").css("filter", "blur(5px)");
    $("#menu").css("filter", "blur(5px)");
    $("#cuerpo").css("filter", "blur(5px)");
    $("#header").css("-webkit-filter", "blur(5px)");
    $("#menu").css("-webkit-filter", "blur(5px)");
    $("#cuerpo").css("-webkit-filter", "blur(5px)");
}

function show_register() {
    $("#login").hide();
    $("#register").show();
    $("#header").css("filter", "blur(5px)");
    $("#menu").css("filter", "blur(5px)");
    $("#cuerpo").css("filter", "blur(5px)");
    $("#header").css("-webkit-filter", "blur(5px)");
    $("#menu").css("-webkit-filter", "blur(5px)");
    $("#cuerpo").css("-webkit-filter", "blur(5px)");
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