
let emailid = document.getElementById("email").value;
function checkEmail(emailid){
    
    let emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    if (emailRegex.match(emailid))
     alert("valid Email");
    else
     alert("invalid Email");
}

checkEmail(emailid);