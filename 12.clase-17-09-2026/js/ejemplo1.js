const ListaDeEstudiantes = [
    { nro: 1, nombre: "Juan", apellido: "Pérez", edad: 20, fechaNacimiento: "15/03/2006", genero: "Masculino" },
    { nro: 2, nombre: "María", apellido: "Gómez", edad: 19, fechaNacimiento: "20/07/2007", genero: "Femenino" },
    { nro: 3, nombre: "Laura", apellido: "Justiniano", edad: 21, fechaNacimiento: "10/01/2005", genero: "Femenino" },
    { nro: 4, nombre: "Ana", apellido: "Fernández", edad: 18, fechaNacimiento: "25/05/2008", genero: "Femenino" },
    { nro: 5, nombre: "Luis", apellido: "Martínez", edad: 20, fechaNacimiento: "12/09/2006", genero: "Masculino" },
    { nro: 6, nombre: "Sofía", apellido: "López", edad: 19, fechaNacimiento: "08/11/2007", genero: "Femenino" },
    { nro: 7, nombre: "Diego", apellido: "García", edad: 22, fechaNacimiento: "18/02/2004", genero: "Masculino" },
    { nro: 8, nombre: "Camila", apellido: "Torres", edad: 18, fechaNacimiento: "30/06/2008", genero: "Femenino" },
    { nro: 9, nombre: "Pedro", apellido: "Vargas", edad: 21, fechaNacimiento: "05/04/2005", genero: "Masculino" },
    { nro: 10, nombre: "Valeria", apellido: "Mendoza", edad: 20, fechaNacimiento: "22/12/2005", genero: "Femenino" }
];

function mostrarEstudiantes() {
    const datos = document.getElementById("datos");
    datos.innerHTML = "";

    ListaDeEstudiantes.forEach(estudiante => {

        let fila = `
            <tr>
                <td>${estudiante.nro}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.edad}</td>
                <td>${estudiante.fechaNacimiento}</td>
                <td>${estudiante.genero}</td>
            </tr>
        `;

        datos.innerHTML += fila;
    });
}
mostrarEstudiantes();
