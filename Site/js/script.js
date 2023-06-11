let menu = document.getElementById("menu")

function mostrarMenu (){
    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
}

let email = document.getElementById("campo-email")

function enviarEmail(){
    let emailDigitado = email.value 
    console.log(emailDigitado)
}

let emailLogin = document.getElementById("campo-email-login")

function enviarEmailLogin(){
    let emailLoginDigitado = emailLogin.value 
    console.log(emailLoginDigitado)
}
