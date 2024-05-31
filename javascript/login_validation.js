
//asegurarse de qe carge todo el dom
document.addEventListener('DOMContentLoaded',()=>{
//seleccionar formulario del Dom
const formulario = document.querySelector('form');
    
//funcion mostrar error
const mostrarError=(input,mensaje)=>{
    //acceder al div contenedor
    const divPadre= input.parentNode;
    //encontramos el elemento error-text
    const errorText= divPadre.querySelector('.error-text');
    //agregar la clase error al elemento padre
    divPadre.classList.add('error');
    //agregar msj de error
    errorText.innerText = mensaje;
}

const input = document.querySelector('#email');
const mensaje = 'campo obligatorio';


//funcion eliminar msj de error

const eliminarError = input => {
    //acceder a la etiqueta contenedora
    const divPadre = input.parentNode;
    //eliminar la clase de error del element padre
    divPadre.classList.remove('error');
     //encontramos el elemento error-text
     const errorText= divPadre.querySelector('.error-text');
     //establecemos el texto como vacio
     errorText.innerText = '';


}

//fncion para corroborar queloscampos esten completospara quitar el error

formulario.querySelectorAll('input').forEach(input =>{
     //se activa cuando el valor de un elemento del formulario cambia y se sale delelemento
     input.addEventListener('change',()=>{
        //obtenemos elvalor del campo seleccionado
        const valor = input.value.trim(); //elimina cualquier espacio en blanco al principio y al final del valor obtenido
        //condicion para evaluar 
        if(valor !== ''){
            eliminarError(input);
        }
     })

})


//funcion validar campo
function validarCampo(campoId,mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if(value == ''){
      mostrarError(campo, mensaje);
      return false;//indicamos que la validacion fallo

    }else{
        eliminarError(campo)
    }
}


//funcion para validar un correo electronico
function isEmail(email){
    const expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
    return expresionRegular.test(email);

}

//funcionpara validar el campo email
function validarEmail(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const email = campo.value.trim();

    if(email===''){
        mostrarError(campo,'el email es obligatorio');
        return false
    }else if(!isEmail(email)){
        mostrarError(campo,mensaje);
        return false
    }else{
        eliminarError(campo);
        return true
    }

}


//funcion para validar el formulario
const validarFormulario = ()=>{
    let validar = true;
   
   validar = validarEmail('email', 'el email debe ser valido') && validar;
   validar = validarCampo('contraseña', 'la contraseña debe ser valida') && validar;
   
return validar;

}


//aggregar un evento de escucha para cuando se envia el form
formulario.addEventListener('submit', event =>{
    event.preventDefault();
    if(!validarFormulario()){
        event.preventDefault()
        console.log("El formulario no es valido...")
    }else{
        event.preventDefault();
        console.log("El formulario es valido")
    }
})

})








/*
const usuario = document.getElementById("usuario");
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

*/