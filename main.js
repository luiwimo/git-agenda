(function(){
    "use strict"    
    var nombre = document.getElementById('nombre') //Voy a buscar por el id de una etiqueta
    console.log(nombre)
    var email = document.getElementById('email')
    console.log(email)
    var tel = document.getElementById('tel')
    console.log(tel)
    var tipo = document.getElementById('tipo')
    console.log(tipo)
    var guardar = document.getElementById('guardar')
    console.log(guardar);

    // function clickGuardar(){
    //     console.log("Click desde la función con nombre");
        
    // }

function validarForm(nombre,email,tel,tipo){
    
    if(nombre !== "" && email !== "" && tel !== "" && tipo !=="0"){
        return true
    }else{
        return false
    }
        
}

    guardar.addEventListener('click',function(){ //Función anónima
        console.log('Le di click');
        validarForm(nombre.value,email.value,tel.value,tipo.value)

        if(validarForm(nombre.value,email.value,tel.value,tipo.value)){
            var tabla = document.querySelector('.table') //Busca un tag clase table
            var row = document.createElement('div') //Crea una etiqueta div
            row.classList.add('row') //Agrega una clase a mi elemento html
            row.innerHTML = '<div class="column">'+nombre.value+'</div>' //Modifica el html dentro <div class="row"></div>
            + '<div class="column">'+email.value+'</div>'
            + '<div class="column">'+tel.value+'</div>'
            + '<div class="column">'+tipo.value+'</div>'
            tabla.appendChild(row) //Agrega un hijo al nodo
        }else{
            alert('Favor de llenar todos los campos')
        }
        console.log('Nombre: ',nombre.value);
        console.log('Email: ',email.value);
        console.log('Telefono: ',tel.value);
        console.log('Tipo: ',tipo.value);
        
    })


})() //IIFE 
//Protege mis variables desde la consola del navegador