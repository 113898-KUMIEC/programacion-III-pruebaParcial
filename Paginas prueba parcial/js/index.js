function validarFormulario(){
    const txtNombre = document.getElementById('txtNombre');
    const txtPassword = document.getElementById('txtPassword');

    if(txtNombre.value !== "riquelme"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado las credenciales correctas!!',
            footer: 'Probaste entrando con: "riquelme"?'
          })
          
         return false;
    }
    if(txtPassword.value !== "elUltimo10"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has ingresado las credenciales correctas!!',
            footer: 'Probaste la contraseña: "elUltimo10"?'
          })
        return false;
    }
    redirigir();
    return true;
}

function redirigir(){
    window.location.replace("./principal.html")
}