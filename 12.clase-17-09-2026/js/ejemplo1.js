const ListaDeEstudiantes = [
    { nro: 1, nombre: "Juan", apellido: "Pérez", edad: 20, fechaNacimiento: "15/03/2006", genero: "Masculino" },
    { nro: 2, nombre: "María", apellido: "Gómez", edad: 19, fechaNacimiento: "20/07/2007", genero: "Femenino" },

];

function mostrarEstudiantes() {
    const datos = document.getElementById("datos");

    datos.innerHTML = "";

    ListaDeEstudiantes.forEach(estudiante => {
        datos.innerHTML += `
            <tr>
                <td>${estudiante.nro}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.fechaNacimiento}</td>
                <td>${estudiante.edad}</td>
                <td>${estudiante.genero}</td>
            </tr>
        `;
    });
}

function agregarTareas() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    let genero = document.getElementById("genero").value;

    if (nombre === "" || apellido === "" || fecha === "" || genero === "") {
        alert("Por favor complete todos los campos");
        return;
    }

  
    let nuevoNro = ListaDeEstudiantes.length + 1;

  
    let fechaNacimiento = new Date(fecha);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    let fechaFormateada = fechaNacimiento.toLocaleDateString("es-ES");

 
    ListaDeEstudiantes.push({
        nro: nuevoNro,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        fechaNacimiento: fechaFormateada,
        genero: genero
    });


    mostrarEstudiantes();

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("genero").value = "";
}

function eliminarTareas() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("genero").value = "";
}


mostrarEstudiantes();