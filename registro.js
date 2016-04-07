/*Done by:
	DSI PROJECT GROUP NUMBER 4
*/


$(document).ready(function () {
    
    $(document).mouseup(function (e){
        var login = $("#login");
        var register = $("#register");
        
        if (!login.is(e.target) && login.has(e.target).length == 0 && login.is(":visible")){
            login.hide();
            document.body.style.filter = "blur(0px)";
        }
        
        if (!register.is(e.target) && register.has(e.target).length == 0 && register.is(":visible")){
            register.hide();
            document.body.style.filter = "blur(0px)";
        }
        
    }); 
});


function show_login() {
    $("#register").hide();
    $("#login").show();
    document.body.style.filter = "blur(1px)";
}
    
function show_register() {
    $("#login").hide();
    $("#register").show();
    document.body.style.filter = "blur(1px)";
}


//function validate_l() {
  // Variable definition
  // The next three lines are for the regular expression used
  // to check wether the values are in the correct form.
  //var word_re = RegExp("^[a-zA-Z ]+$");
  //var num_re = RegExp("^[0-9]+$");
  //var email_re =
  //RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

   // The next variables are the ones that are going to be avaluated
  //var inputs = document.getElementsByTagName("input");
  //var passwords = document.getElementsByClassName("password");
  //var user = document.getElementById("usr_l");
  //var check_error = 0;
  // By default 0 if errors foudn on parsing set to 1.

  // Iterate in all the input fields in the form.
  /*for(var i = 0; i != inputs.length; i++) {
    // When the type of the input is text.
    if(inputs[i].type == "text") {
      // If the input is a number.
      if(inputs[i].className == "number") {
        if(!num_re.test(inputs[i].value)) {
          alert("ERROR: "+inputs[i].name+" is not a number.");
          form_err(inputs[i]);
          check_error = 1;
        }
        // If the input is optional but is text.
      } else if(inputs[i].className == "optional") {
        if(inputs[i].value != "") {
          if(!word_re.test(inputs[i].value)) {
              alert("ERROR: "+inputs[i].name+
                " has invalid values.");
              check_error = 1;
          }
        }
      // If the input is an email we check it forms.
    } else if(inputs[i].type == "email") {
      if(!email_re.test(inputs[i].value)) {
        alert("ERROR: "+inputs[i].value+
          " is not an email address.");
          check_error = 1;
      }
    }
  }
  }
}*/

/*  // If username is set, check the passwords.
  if(user.value != "") {
    if(passwords[0].value == "") {
      alert("You must have a password.");
      check_error = 1;
    } else if(passwords[0].value != passwords[1].value) {
      alert("Passwords don't match.");
      check_error = 1;
    }
  }

  // If no errors.
  if(check_error == 0) {
    document.getElementById("my_form").submit();
   }*/
