let menu = document.getElementById("menu")

function mostrarMenu (){
    if(menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }
}

function enviarEmail(){
    let email = document.getElementById("campo-email").value 
    console.log(email)
}

function enviarEmailLogin(){
    let emailLogin = document.getElementById("campo-email-login").value
    let senhaLogin = document.getElementById("campo-senha").value
    console.log(emailLogin, senhaLogin)
}

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior: 'smooth'
        }
    )
}

function cadastrar(){
    alert("Cadastrado com sucesso!");
    window.location.href = "../index.html";
}