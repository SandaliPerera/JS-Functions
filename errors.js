
window.onload = function() {
    document.getElementById("msg").style.visibility = 'hidden';
    
  };

function CheckPassword(password,confirmPassword) {

    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;

    if (password.length < 7 || password.search(anUpperCase) == -1 ||  
    password.search(aLowerCase) == -1 || password.search (aNumber) == -1)  
    { 
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Password";
        
        return false;
        
    }  
    else if(password != confirmPassword){
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Passwords not matched";
        return false;

    }else{ 

    }  

}
function validatePassword(password) {

    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;

    if (password.length < 7 || password.search(anUpperCase) == -1 ||  
    password.search(aLowerCase) == -1 || password.search (aNumber) == -1)  
    { 
        document.getElementById("password").style.background  = "#FFE5E4";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("text").style.visibility = 'visible';
        document.getElementById("text").innerHTML ="Invalid Password";
        return false;
        
    }else{ 
    document.getElementById("password").style.background  = "#f1f1f1";
    document.getElementById("password").style.borderColor  = "transparent";

    }  

}
function validateUsername(username) {

    var position = username.indexOf("/");

    if (username.length < 10 || username.search(anUpperCase) == -1 || position != 4 || username.match(aLowerCase))   
    { 
        document.getElementById("username").style.background  = "#FFE5E4";
        document.getElementById("username").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("username").style.background  = "#f1f1f1";
        document.getElementById("username").style.borderColor  = "transparent";
    }


}

function validate(username,password) {
    
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var position = username.indexOf("/");

    if (username.length < 10 || username.search(anUpperCase) == -1 || position != 4 || username.match(aLowerCase))   
    { 
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Username";
        return false;
        
    } else if (password.length < 7 || password.search(anUpperCase) == -1 ||   password.search (aNumber) == -1)  
    { 
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Password";
        return false;
        
    }  
  }
  

  function validateReset(username,email) {
    
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/; 
    var aNumber = /[0-9]/;
    var position = username.indexOf("/");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (username.length < 10 || username.search(anUpperCase) == -1 || position != 4 || username.match(aLowerCase))   
    { 
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Username Format";
        return false;
        
    } else  if (email.match(pattern))
    {
        return true;
    }else{
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Email Format";
        return false;
    }
  }


  function validateRegistrations() {
    

    var t1 = document.getElementById("t1").checked;
    var t2 = document.getElementById("t2").checked;

    if(t1==false && t2==false  ){
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Select At least One Type";
        return false;
    }

   
    // Validate Email
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email = document.getElementById("email").value;
    if (email.match(pattern))
    {
        document.getElementById("email").style.background  = "#f1f1f1";
        document.getElementById("email").style.borderColor  = "transparent";
    }else{
        document.getElementById("email").style.background  = "#FFE5E4";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Email";
        return false;
    }

    // validate NIC
    var nic = document.getElementById("nic").value;
    if (nic.length == 10 ){
        if(nic.includes("V",9) == true){
            document.getElementById("nic").style.background  = "#f1f1f1";
            document.getElementById("nic").style.borderColor = "transparent";
            return true;
        }else{
            document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            document.getElementById("msg").style.visibility = 'visible';
            document.getElementById("msg").innerHTML ="Invalid NIC";
            return false;
        }
    }

    else if (nic.length == 12 )
    {
        
        document.getElementById("nic").style.background  = "#f1f1f1";
        document.getElementById("nic").style.borderColor  = "transparent";
        
    }else{
        
        document.getElementById("nic").style.background  = "#FFE5E4";
        document.getElementById("nic").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid NIC";
        return false;
    }
    
    // validate contactNO
    var contactNumber = document.getElementById("contactNo").value;
    var phoneno = /^\+?([0-9]{4})\)?[-. ]?([0-9]{6})$/;
    var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{7})$/;

    if (contactNumber.match(phoneno) || contactNumber.match(phoneno2) )
    {
        document.getElementById("contactNo").style.background  = "#f1f1f1";
        document.getElementById("contactNo").style.borderColor  = "transparent";
        
    }else{
        document.getElementById("contactNo").style.background  = "#FFE5E4";
        document.getElementById("contactNo").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Contact Number";
        return false;
        
    }


    if (userID.length == 9 ){
        var userID = document.getElementById("officerid").value;
        if((userID.charAt(0) == "O" && userID.charAt(1) == "F") || (userID.charAt(0) == "T" && userID.charAt(1) == "C")  ){
            document.getElementById("nic").style.background  = "#f1f1f1";
            document.getElementById("nic").style.borderColor = "transparent";
        }else{
            document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            return false;
        }
    }else{
        document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            return false;
    }

  


  }

//COMMON FOR TEACHER AND OFFICER
  function validateRegistration() {


    var d1 = document.getElementById("d1").checked;
    var d2 = document.getElementById("d2").checked;
    var d3 = document.getElementById("d3").checked;
    var d4 = document.getElementById("d4").checked;
    var d5 = document.getElementById("d5").checked;
    var d6 = document.getElementById("d6").checked;

    
    if(d1==false && d2==false && d3==false && d4==false && d5==false  && d6==false ){
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Select At least One duty";
        return false;
    }

    
    // Validate Email
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email = document.getElementById("email").value;
    if (email.match(pattern))
    {
        document.getElementById("email").style.background  = "#f1f1f1";
        document.getElementById("email").style.borderColor  = "transparent";
    }else{
        document.getElementById("email").style.background  = "#FFE5E4";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Email";
        return false;
    }

    // validate NIC
    var nic = document.getElementById("nic").value;
    if (nic.length == 10 ){
        if(nic.includes("V",9) == true){
            document.getElementById("nic").style.background  = "#f1f1f1";
            document.getElementById("nic").style.borderColor = "transparent";
            return true;
        }else{
            document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            document.getElementById("msg").style.visibility = 'visible';
            document.getElementById("msg").innerHTML ="Invalid NIC";
            return false;
        }
    }

    else if (nic.length == 12 )
    {
        
        document.getElementById("nic").style.background  = "#f1f1f1";
        document.getElementById("nic").style.borderColor  = "transparent";
        
    }else{
        
        document.getElementById("nic").style.background  = "#FFE5E4";
        document.getElementById("nic").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid NIC";
        return false;
    }
    
    // validate contactNO
    var contactNumber = document.getElementById("contactNo").value;
    var phoneno = /^\+?([0-9]{4})\)?[-. ]?([0-9]{6})$/;
    var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{7})$/;

    if (contactNumber.match(phoneno) || contactNumber.match(phoneno2) )
    {
        document.getElementById("contactNo").style.background  = "#f1f1f1";
        document.getElementById("contactNo").style.borderColor  = "transparent";
        
    }else{
        document.getElementById("contactNo").style.background  = "#FFE5E4";
        document.getElementById("contactNo").style.borderColor = "red";
        document.getElementById("msg").style.visibility = 'visible';
        document.getElementById("msg").innerHTML ="Invalid Contact Number";
        return false;
        
    }


    if (userID.length == 9 ){
        var userID = document.getElementById("officerid").value;
        if((userID.charAt(0) == "O" && userID.charAt(1) == "F") || (userID.charAt(0) == "T" && userID.charAt(1) == "C")  ){
            document.getElementById("nic").style.background  = "#f1f1f1";
            document.getElementById("nic").style.borderColor = "transparent";
        }else{
            document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            return false;
        }
    }else{
        document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            return false;
    }

  


  
  }

   // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

//   function checkDate(field)
//   {
//     var allowBlank = true;
//     var minYear = 1902;
//     var maxYear = (new Date()).getFullYear();

//     var errorMsg = "";

//     // regular expression to match required date format
//     re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

//     if(field.value != '') {
//       if(regs = field.value.match(re)) {
//          if(regs[3] < minYear || regs[3] > maxYear) {
//           errorMsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
//         }
//       } else {
//         errorMsg = "Invalid date format: " + field.value;
//       }
//     } else if(!allowBlank) {
//       errorMsg = "Empty date not allowed!";
//     }

//     if(errorMsg != "") {
//       alert(errorMsg);
//       field.focus();
//       return false;
//     }

//     return true;
//   }

  function validateEmail(email){

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (email.match(pattern))
    {
        document.getElementById("email").style.background  = "#f1f1f1";
        document.getElementById("email").style.borderColor  = "transparent";
    }else{
        document.getElementById("email").style.background  = "#FFE5E4";
        document.getElementById("email").style.borderColor = "red";
        return false;
    }
  }
  
  function validateEmailP(email){

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (email.match(pattern))
    {
        document.getElementById("pEmail").style.background  = "#f1f1f1";
        document.getElementById("pEmail").style.borderColor  = "transparent";
    }else{
        document.getElementById("pEmail").style.background  = "#FFE5E4";
        document.getElementById("pEmail").style.borderColor = "red";
        return false;
    }
  }

  function contact(input){

    var phoneno = /^\+?([0-9]{4})\)?[-. ]?([0-9]{6})$/;
    var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{7})$/;
    //var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
// || input.match(phoneno2) 
    if (input.match(phoneno) || input.match(phoneno2) )
    {
        document.getElementById("contactNo").style.background  = "#f1f1f1";
        document.getElementById("contactNo").style.borderColor  = "transparent";
        
    }else{
        document.getElementById("contactNo").style.background  = "#FFE5E4";
        document.getElementById("contactNo").style.borderColor = "red";
        return false;
        
    }
  }
  function contactP(input){

    var phoneno = /^\+?([0-9]{4})\)?[-. ]?([0-9]{6})$/;
    var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{7})$/;
    //var phoneno2 = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
// || input.match(phoneno2) 
    if (input.match(phoneno) || input.match(phoneno2) )
    {
        document.getElementById("Pcontact").style.background  = "#f1f1f1";
        document.getElementById("Pcontact").style.borderColor  = "transparent";
        
    }else{
        document.getElementById("Pcontact").style.background  = "#FFE5E4";
        document.getElementById("Pcontact").style.borderColor = "red";
        return false;
    }
  }

  function NIC(input){
      
    if (input.length == 10 ){
        if(input.includes("V",9) == true){
            document.getElementById("nic").style.background  = "#f1f1f1";
            document.getElementById("nic").style.borderColor = "transparent";
            return true;
        }else{
            document.getElementById("nic").style.background  = "#FFE5E4";
            document.getElementById("nic").style.borderColor  = "red";
            return false;
        }
    }

    else if (input.length == 12 )
    {
        
        document.getElementById("nic").style.background  = "#f1f1f1";
        document.getElementById("nic").style.borderColor  = "transparent";
        
    }else{
        
        document.getElementById("nic").style.background  = "#FFE5E4";
        document.getElementById("nic").style.borderColor = "red";
        return false;
    }
    
  }

  function NICp(input){
      

    if (input.length == 10 ){
        if(input.includes("V",9) == true){
            document.getElementById("pNIC").style.background  = "#f1f1f1";
            document.getElementById("pNIC").style.borderColor = "transparent";
            return true;
        }else{
            document.getElementById("pNIC").style.background  = "#FFE5E4";
            document.getElementById("pNIC").style.borderColor  = "red";
            return false;
        }
    }

    else if (input.length == 12 )
    {
        
        document.getElementById("pNIC").style.background  = "#f1f1f1";
        document.getElementById("pNIC").style.borderColor  = "transparent";
        
    }else{
        
        document.getElementById("pNIC").style.background  = "#FFE5E4";
        document.getElementById("pNIC").style.borderColor = "red";
        return false;
    }
    
  }