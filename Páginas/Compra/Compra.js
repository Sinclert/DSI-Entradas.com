/*Done by: DSI PROJECT GROUP NUMBER 4 */

var current;
var current2;
var current3;
var price = 10;
var tickets = 0;
var totalPrice = 0;

$(document).ready(function() {
    
    $("#datepicker").datepicker();
    
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
    
    
    /* SEATS SELECTION JAVASCRIPT */
    
	var $cart = $('#selected-seats'), // Sitting Area
	$counter = $('#counter'), // Votes
	$total = $('#total'); // Total money
	
	var sc = $('#seat-map').seatCharts({
		map: [  // Seating chart
			'aaaaaaaaaa',
            'aaaaaaaaaa',
            '__________',
            'aaaaaaaa__',
            'aaaaaaaaaa',
			'aaaaaaaaaa',
			'aaaaaaaaaa',
			'aaaaaaaaaa',
			'aaaaaaaaaa',
            'aa__aa__aa'
		],
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return column;
			}
		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Libre' ],
				[ 'a', 'unavailable', 'Vendida']
			]					
		},
        
		click: function () { // Click event
            
			if (this.status() == 'available') {
				$('<li>F'+(this.settings.row+1)+' B'+this.settings.label+'</li>')
					.attr('id', 'cart-item-'+this.settings.id)
					.data('seatId', this.settings.id)
					.appendTo($cart);

				$counter.text(sc.find('selected').length+1);
				$total.text(recalculateTotal(sc)+price);
				
                totalPrice = totalPrice + price;
                tickets++;
				return 'selected';
			}
            else if (this.status() == 'selected') {
				$counter.text(sc.find('selected').length-1);
				$total.text(recalculateTotal(sc)-price);
						
				//Delete reservation
				$('#cart-item-'+this.settings.id).remove();
                
                totalPrice = totalPrice - price;
                tickets--;
				return 'available';
			}
            else if (this.status() == 'unavailable') { //sold
				return 'unavailable';
			}
            else {
				return this.style();
			}
		}
	});
    
	// Sold seat
	sc.get(['1_2', '4_4','4_5','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2']).status('unavailable');
		
});


function recalculateTotal(sc) {
    totalPrice = 0;
	sc.find('selected').each(function () {
		totalPrice += price;
	});
    
	return totalPrice;
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


function nextSection(n){
    var elem = document.getElementById("myBar");
    var width = (n-1) * 25;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= n*25) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = width * 1  + '%';
        }
    }
    
    if (n==1){
        $("#sectionBody_1").slideUp(400);
        $("#sectionBody_2").slideDown(400);
        $("#header1").text("Capitán América " + current2.innerHTML + " " + current.innerHTML + "  " + current3.innerHTML);
    }
    
    if (n==2){
        $("#sectionBody_2").slideUp(400);
        $("#sectionBody_3").slideDown(400);
        $("#header2").text("Tickets: " + tickets + " Precio: " + totalPrice + " €");
    }
    
    else if(n==3){
        $("#sectionBody_3").slideUp(400);
        $("#sectionBody_4").slideDown(400);
    }
}


function showSection(n){
    
    if (n==1){
        $("#sectionBody_2").slideUp(400);
        $("#sectionBody_3").slideUp(400);
        $("#sectionBody_4").slideUp(400);
        $("#sectionBody_1").slideDown(400);
        
        $("#header2").text("Tickets: " + tickets + " Precio: " + totalPrice + " €");
    }
    
    else if(n==2){
        $("#sectionBody_1").slideUp(400);
        $("#sectionBody_3").slideUp(400);
        $("#sectionBody_4").slideUp(400);
        $("#sectionBody_2").slideDown(400);
        
        $("#header1").text("Capitán América " + current2.innerHTML + " " + current.innerHTML + "  " + current3.innerHTML);
    }
    
    else if(n==3){
        $("#sectionBody_1").slideUp(400);
        $("#sectionBody_2").slideUp(400);
        $("#sectionBody_4").slideUp(400);
        $("#sectionBody_3").slideDown(400);
        
        $("#header1").text("Capitán América " + current2.innerHTML + " " + current.innerHTML + "  " + current3.innerHTML);
        $("#header2").text("Tickets: " + tickets + " Precio: " + totalPrice + " €");
    }
    
    else if(n==4){
        $("#sectionBody_1").slideUp(400);
        $("#sectionBody_2").slideUp(400);
        $("#sectionBody_3").slideUp(400);
        $("#sectionBody_4").slideDown(400);
        
        $("#header1").text("Capitán América " + current2.innerHTML + " " + current.innerHTML + "  " + current3.innerHTML);
        $("#header2").text("Tickets: " + tickets + " Precio: " + totalPrice + " €");
    }
}


function creditCard(method){
    $("#header3").text("Método de pago: " + method.value);
    var informationBox = $("#paymentInformation");
    informationBox.css("visibility", "visible");
}


function paypal(method){
    $("#header3").text("Método de pago: " + method.value);
    window.open("https://www.paypal.com/signin/", "blank");
    var informationBox = $("#paymentInformation");
    informationBox.css("visibility", "hidden", 400);
}


function highlite(el){
	if (current != null){
		current.className = "";
        current.style.backgroundColor="transparent";
	}
	el.className = "highlite";
    el.style.backgroundColor="#fbb900";
	current = el;
    show();
}


function highliteB(el){
	if (current2 != null){
		current2.className = "";
        current2.style.backgroundColor="transparent";
	}
	el.className = "highlite";
    el.style.backgroundColor="#fbb900";
	current2 = el;
    show();
}


function highliteC(el){
	if (current3 != null){
		current3.className = "";
        current3.style.backgroundColor="transparent";
	}
	el.className = "highlite";
    el.style.backgroundColor="#fbb900";
    current3 = el;
}


function show() {
    if (current != null && current2 != null){
        $("#sesiones").fadeIn(500);
    }
}



function validarPago() {
    var numero = document.forms["myForm"]["numTarj"].value;
    var titular = document.forms["myForm"]["titTarj"].value;
    var cvv = document.forms["myForm"]["cvv"].value;
    

    if (numero == null || numero == ""|| titular == null|| titular == ""|| cvv == null|| cvv == "") {
        alert("Toda la información debe ser rellenada");
        return false;
    }
    else {
        nextSection(3);
    }
}

/*function validarButacas() {
    if(total== 0){
        alert("Debe elegir butacas antes de continuar");
        return false;
    }
    else{
        nextSection(2);
    }
}*/