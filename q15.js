function checkEmail(){
    let emailid = document.getElementById("email").value;
 
     if (emailid.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
     
        alert("valid Email");
    }
    else {
   
    alert("Invalid Email");
    } 
}

