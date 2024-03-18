//Declaracion de variables
let calificacionFinal = [];
let nombreEstudiante;
let notaFinal;
let contador = {
    menores10: 0,
    mayores10: 0
};

//Ciclo para ingresar datos al array y contar calificaciones menores y mayores que 10 en el objeto
do {
    nombreEstudiante = prompt("-***- Bienvenido al sistema de promedio por sección -***-\n \nIngresar nombre del estudiante.\n \nPara salir del sistema escribir \"ESCAPE\".");

    if (nombreEstudiante.toLocaleUpperCase() === "ESCAPE") {
        break;
    }

    notaFinal = parseInt(prompt("Ingresar la calificacion final del estudiante ingresado"));

    if (notaFinal <= 9) {
        contador.menores10++;
    } else if (notaFinal >= 10) {
        contador.mayores10++;
    }

    //Agregar información al array
    let infoAgregada = {
        estudiante: nombreEstudiante,
        calificacionFinal: notaFinal,
    };
    calificacionFinal.push(infoAgregada);

} while (nombreEstudiante.toLocaleUpperCase() !== "ESCAPE");


//Función para sumar calificaciones ingresadas
function sumaDeCalificacion() {
    return calificacionFinal.reduce((acum, nota) => acum + nota.calificacionFinal, 0);
}
//Función para calcular el promedio de las notas ingresadas
function promedioDeLaSeccion() {
    let total = sumaDeCalificacion();
    let promedio = total / calificacionFinal.length;
    return parseFloat(promedio.toFixed(2));
}

//Mensaje final por medio de un alert
alert("El promedio total de la sección es: " + promedioDeLaSeccion() + "\nLa cantidad de estudiantes ingresados fueron: " + calificacionFinal.length +
    "\nCantidad de estudiantes con calificación menor a 10: " + contador.menores10 +
    "\nCantidad de estudiantes con calificación mayor a 10: " + contador.mayores10);
