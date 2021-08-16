document.getElementById('submitbtn').addEventListener('click',function(){
    let emailField= document.getElementById('email-filed').value;
    let passwordfield =document.getElementById('password-filed').value;
    if(emailField == 'rakibul2@gmail.com' && passwordfield == 'rakibul'){
        window.location.href='banking.html';
    }
   })