$(document).ready(function () {
     
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
    
    
    var index = 0;								//index to determine the number of the slide which appears
    var lastIndex = 0;
    var slides = $(".slider div");				//slide which is in the div at the moment
    var nslides = slides.length;				//number of total slides

    function slideCraigslist() {					//This function will identify the index, to create a different animation for
         var slide = $('.slider div').eq(index);		//each slide.
         var dots = document.getElementsByClassName("dot");								 //"slide" is the following slide in the div
             slides.hide();
             slide.fadeIn("slow");
             dots[lastIndex].classList.remove("active");
             dots[index].classList.add("active");
    }
    window.onload = slideCraigslist();
    var automatic = setInterval(function() {		//This function makes the slides pass automaticalle each 5 seconds
        lastIndex = index;
        index = index + 1;							//In case the index is higher than the amount of slides -1, it will start again from 0
        if (index > nslides - 1) {
            index = 0;
        }
        slideCraigslist();
    }, 7000);

    $('#arrowright').click(function() {				//Passes slides manually by clicking right arrow.
        clearInterval(automatic);						//In case the index is higher than the amount of slides -1, it will start again from 0
        lastIndex = index;
        index = index + 1;
        if (index > nslides - 1) {
            index = 0;
        }
        slideCraigslist();
        automatic = setInterval(function() {		    //This function makes the slides pass automaticalle each 5 seconds
            lastIndex = index;
            index = index + 1;							//In case the index is higher than the amount of slides -1, it will start again from 0
            if (index > nslides - 1) {
                    index = 0;
            }
            slideCraigslist();
            }, 5000);
    });

    $('#arrowleft').click(function() {				//Passes slides manually by clicking left arrow.
        clearInterval(automatic);						//In case the index is lower than 0, it will start again from the last slide
        lastIndex = index;
        index = index - 1;
        if (index < 0) {
            index = nslides - 1;
        }
        slideCraigslist();
        automatic = setInterval(function() {		    //This function makes the slides pass automaticalle each 5 seconds
            lastIndex = index;
            index = index + 1;							//In case the index is higher than the amount of slides -1, it will start again from 0
            if (index > nslides - 1) {
                    index = 0;
            }
            slideCraigslist();
            }, 5000);
    });

});


function currentSlide(n) {
    clearInterval(automatic);
    lastIndex = index;
    index = n-1;
    slideCraigslist();
    automatic = setInterval(function() {		    // This function makes the slides pass automaticalle each 5 seconds
        lastIndex = index;
        index = index + 1;							// In case the index is higher than the amount of slides -1, it will start again from 0
        if (index > nslides - 1) {
                index = 0;
        }
        slideCraigslist();
        }, 5000);
}

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