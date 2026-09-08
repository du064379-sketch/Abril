//Crear in programa que de una lista de tareas
//debe permitir.
// 1. Agregar ina tarea
// 2. Eliminar una tarea
// 3. Mostar toda las tareas
// 4. Marcar una tarea como completada
// 5. Mostrar las tareas incompletas

// Listas de tareas
let tareas = [];
function agregarTarea(tarea="", estado="Incompleto"){
    if (tarea===""){
     tarea= document.getElementById("tarea").value;
     estado = document.getElementById("tareaSelect").value;
    }
    tareas.push({ descripcion: tarea , completada: estado });
}
function eliminarTarea(indice){
    if (indice >= 0 && indice < tareas.length){
        tareas.splice(indice, 1);
    }else{
        console.log("Indice invalido");
    }
}
function mostrarTareas(){
    console.log(" Mostrando Lista de tareas:");
    tareas.forEach((tarea, indice ) => {
       console.log(`${indice + 1}. 
        [${tarea.completada }]);
                ${tarea.descripcion}`);
    });
}

//Adicionar las tareas
agregarTarea("Comprar leche","Completado");
agregarTarea("Hacer ejercicio","Completado");
agregarTarea("estudiar JavaScript","Incompletado");
agregarTarea("Subir a GitHub","Incompletado");
mostrarTareas();
