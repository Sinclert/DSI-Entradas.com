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


    var index = 0;
    var lastIndex = 0;
    var slides = $(".slider div");
    var nslides = slides.length;

    function slideEntradas() {
         var slide = $('.slider div').eq(index);
         var dots = document.getElementsByClassName("dot");
             slides.hide();
             slide.fadeIn("slow");
             dots[lastIndex].classList.remove("active");
             dots[index].classList.add("active");
    }
    window.onload = slideEntradas();
    var automatic = setInterval(function() {
        lastIndex = index;
        index = index + 1;
        if (index > nslides - 1) {
            index = 0;
        }
        slideEntradas();
    }, 5000);

    $('#arrowright').click(function() {
        clearInterval(automatic);
        lastIndex = index;
        index = index + 1;
        if (index > nslides - 1) {
            index = 0;
        }
        slideEntradas();
        automatic = setInterval(function() {
            lastIndex = index;
            index = index + 1;
            if (index > nslides - 1) {
                    index = 0;
            }
            slideEntradas();
            }, 5000);
    });

    $('#arrowleft').click(function() {
        clearInterval(automatic);
        lastIndex = index;
        index = index - 1;
        if (index < 0) {
            index = nslides - 1;
        }
        slideEntradas();
        automatic = setInterval(function() {
            lastIndex = index;
            index = index + 1;
            if (index > nslides - 1) {
                    index = 0;
            }
            slideEntradas();
            }, 5000);
    });

});


function currentSlide(n) {
    clearInterval(automatic);
    lastIndex = index;
    index = n-1;
    slideEntradas();
    automatic = setInterval(function() {
        lastIndex = index;
        index = index + 1;
        if (index > nslides - 1) {
                index = 0;
        }
        slideEntradas();
        }, 5000);
}

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
