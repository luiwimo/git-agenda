(function () {
    "use strict"

    //Arreglos

    var listaFrutas = ["Mango", "Manzana", "Pera"]

    var listaSuper = ["Huevo", "Leche", "Carne"]

    var playList = new Array('Cumbia', 'Salsa', 'Rock')

    console.log("Numero de frutas: " + listaFrutas.length) //x.length Tamaño

    console.log("Elegí: ", listaFrutas[1]); //Trae Fruta posición 1

    listaFrutas.push('Guayaba') //Agregar elemento al final

    console.log("Nueva lista", listaFrutas)

    listaFrutas[3] = "Toronja" //Puede modificarse 

    console.log("Nueva lista", listaFrutas)

    listaFrutas.splice(1, 0, "Higo") //Inserta elemento en 1, borrando 0, inserta Higo

    //Onjetos

    var sensei = {
        nombre: "Luis",
        edad: 30,
        anios_exp: 5,
        habilidad: ["C", "C++", "Python", "SQL"]
    }

    var alumno = {
        nombre: "Luis",
        edad: 30,
        anios_exp: 5,
        habilidad: ["C", "C++", "Python", "SQL"],
        estudios: {
            universidad: "Unam",
            prepa: "Bachillerato"
        }
    }

    console.log(sensei.edad); //Llamar atributo

    console.log(sensei.habilidad[2]);

    console.log(alumno.estudios.universidad);


    alumno.trabajo = "Developer"

    console.log(alumno);

    var cancion1 = {
        titulo: "El triste",
        autor: "Roberto Cantoral",
        duracion: 3
    }


    var cancion2 = {
        titulo: "Como la Flor",
        autor: "Selena",
        duracion: 2.5
    }

    var playList2 = [cancion1, cancion2]

    console.log("Reproduciendo: " + playList2[0].titulo);

    //-----------Contactos--------------------------------------------
    var contacto1 = {
        nombre: "Raul",
        email: "drag@gmail.com",
        telefono: "0122203",
        tipo: 2
    }

    var contacto2 = {
        nombre: "Edwin",
        email: "dr05@gmail.com",
        telefono: "0222203",
        tipo: 1
    }

    var contacto3 = {
        nombre: "Luis",
        email: "dra_2@gmail.com",
        telefono: "01803",
        tipo: 2
    }

    var listaContactos = [contacto1, contacto2, contacto3]

    var tabla = document.querySelector('.table') //Busca un tag clase table

    function addNodo(contacto){
        var row = document.createElement('div')
        if(contacto.tipo===1){
            var tipo = "Trabajo"
        }else{
            var tipo = "Personal"
        }

        row.classList.add('row')
        row.innerHTML = '<div class="column">' + contacto.nombre + '</div>' //Modifica el html dentro <div class="row"></div>
            + '<div class="column">' + contacto.email + '</div>'
            + '<div class="column">' + contacto.telefono + '</div>'
            + '<div class="column">' + tipo + '</div>'
        tabla.appendChild(row) //Agrega un hijo al nodo

    }

    for (var i = 0; i < listaContactos.length; i++) {
        addNodo(listaContactos[i])
    }

    

})()//IIFE