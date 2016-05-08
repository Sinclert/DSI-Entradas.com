/*Done by:
	DSI PROJECT GROUP NUMBER 4
*/

var price = 10;
var current;
var current2;
var current3;

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
        }
        
        if (!register.is(e.target) && register.has(e.target).length == 0 && register.is(":visible")){
            register.hide();
            $("#header").css("filter", "none");
            $("#menu").css("filter", "none");
            $("#cuerpo").css("filter", "none");
        }
        
    });
    
    
    /* SEATS SELECTION JAVASCRIPT */
    
	var $cart = $('#selected-seats'), //Sitting Area
	$counter = $('#counter'), //Votes
	$total = $('#total'); //Total money
	
	var sc = $('#seat-map').seatCharts({
		map: [  //Seating chart
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
		click: function () { //Click event
			if (this.status() == 'available') { //optional seat
				$('<li>R'+(this.settings.row+1)+' S'+this.settings.label+'</li>')
					.attr('id', 'cart-item-'+this.settings.id)
					.data('seatId', this.settings.id)
					.appendTo($cart);

				$counter.text(sc.find('selected').length+1);
				$total.text(recalculateTotal(sc)+price);
							
				return 'selected';
			} else if (this.status() == 'selected') { //Checked
					//Update Number
					$counter.text(sc.find('selected').length-1);
					//update totalnum
					$total.text(recalculateTotal(sc)-price);
						
					//Delete reservation
					$('#cart-item-'+this.settings.id).remove();
					//optional
					return 'available';
			} else if (this.status() == 'unavailable') { //sold
				return 'unavailable';
			} else {
				return this.style();
			}
		}
	});
	//sold seat
	sc.get(['1_2', '4_4','4_5','6_6','6_7','8_5','8_6','8_7','8_8', '10_1', '10_2']).status('unavailable');
		
});


function recalculateTotal(sc) {
	var total = 0;
	sc.find('selected').each(function () {
		total += price;
	});
			
	return total;
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
        $("#sectionBody_1").hide(400);
        $("#sectionBody_2").show(400);
    }
    
    if (n==2){
        $("#sectionBody_2").hide(400);
        $("#sectionBody_3").show(400);
    }
    
    else if(n==3){
        $("#sectionBody_3").hide(400);
        $("#sectionBody_4").show(400);
    }
}


function showSection(n){
    
    if (n==1){
        $("#sectionBody_2").hide(400);
        $("#sectionBody_3").hide(400);
        $("#sectionBody_4").hide(400);
        $("#sectionBody_1").show(400);
    }
    
    else if(n==2){
        $("#sectionBody_1").hide(400);
        $("#sectionBody_3").hide(400);
        $("#sectionBody_4").hide(400);
        $("#sectionBody_2").show(400);
    }
    
    else if(n==3){
        $("#sectionBody_1").hide(400);
        $("#sectionBody_2").hide(400);
        $("#sectionBody_4").hide(400);
        $("#sectionBody_3").show(400);
    }
    
    else if(n==4){
        $("#sectionBody_1").hide(400);
        $("#sectionBody_2").hide(400);
        $("#sectionBody_3").hide(400);
        $("#sectionBody_4").show(400);   
    }
}


function creditCard(){
    var informationBox = $("#paymentInformation");
    informationBox.css("visibility", "visible");
}

function paypal(){
    
    window.open("https://www.paypal.com/signin/", "blank");
    var informationBox = $("#paymentInformation");
    informationBox.css("visibility", "hidden");
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


/*
function validarPago() {
    var numero = document.forms["myForm"]["numTarj"].value;
    var titular = document.forms["myForm"]["titTarj"].value;
    var cvv = document.forms["myForm"]["cvv"].value;
    

    if (numero == null || numero == ""|| titular == null|| titular == ""|| cvv == null|| cvv == "") {
        alert("Toda la información debe ser rellenada");
        return false;
        }
    else{
        nextSection(3);
    }
*/