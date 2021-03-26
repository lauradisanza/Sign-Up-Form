/* Error message when field is blank */
document.getElementById("trial-form").onsubmit = function () {
     var w = document.forms["trial-form"]["first"].value;
     var x = document.forms["trial-form"]["last"].value;
     var y = document.forms["trial-form"]["email"].value;
     var z = document.forms["trial-form"]["password"].value;
 
     var submit = true;

     if (w == null || w == "") {
         firstError = "Please enter your first name";
         document.getElementById("first_error").innerHTML = firstError;
         submit = false;

     if (x == null || x == "") {
         lastError = "Please enter your last name";
         document.getElementById("last_error").innerHTML = lastError;
         submit = false;
     }
 
     if (y == null || y == "") {
         emailError = "Please enter your email";
         document.getElementById("email_error").innerHTML = emailError;
         submit = false;
     }
 
     if (z == null || z == "") {
         passwordError = "Please enter your password";
         document.getElementById("password_error").innerHTML = passwordError;
         submit = false;
     }
 
     return submit;
 }
 
 function removeWarning() {
     document.getElementById(this.id + "_error").innerHTML = "";
 }
 
 document.getElementById("first").onkeyup = removeWarning;
 document.getElementById("last").onkeyup = removeWarning;
 document.getElementById("email").onkeyup = removeWarning;
 document.getElementById("password").onkeyup = removeWarning;