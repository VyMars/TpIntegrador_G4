

const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const form = document.getElementById("form");
const parrafo = document.getElementById("advertencia");
const enviado = document.getElementById("enviado");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let advertencia= "";
    let entrar = false;
    parrafo.innerHTML = "";
    let regexemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ ;
    if(!regexemail.test(email.value)){
        advertencia += `-El email no es válido <br>`  
        entrar = true;
    }

    if(contraseña.value.length <=3 ){
       advertencia += `-La contraseña debe ser mas larga <br>`    
       entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = advertencia;
    }else{
       //let texto = 'Enviado exitosamente' ;
        enviado.innerHTML = 'Datos enviados' ;
    }
})

