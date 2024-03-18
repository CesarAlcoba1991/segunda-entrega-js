//Variables
let calificacionFinal = [];
let nombreEstudiante;
let notaFinal;
let contador = {
    menores10: 0,
    mayores10: 0
};

//Ciclo para ingresar datos al array y contador para notas mayores y menores que 10 y verificar el rango permitido
do {
    nombreEstudiante = prompt("-***- Bienvenido al sistema de promedio por sección -***-\n \nIngresar nombre del estudiante.\n \nPara salir del sistema escribir \"ESCAPE\".");

    if (nombreEstudiante.toLocaleUpperCase() === "ESCAPE") {
        break;
    }

    do {
        notaFinal = parseInt(prompt("Ingresar la calificacion final del estudiante ingresado (0-20)"));
    } while (isNaN(notaFinal) || notaFinal < 0 || notaFinal > 20);

    // Contador de notas menores y mayores que 10
    if (notaFinal <= 9) {
        contador.menores10++;
    } else if (notaFinal >= 10) {
        contador.mayores10++;
    }

    let infoAgregada = {
        estudiante: nombreEstudiante,
        calificacionFinal: notaFinal,
    };
    calificacionFinal.push(infoAgregada);

} while (nombreEstudiante.toLocaleUpperCase() !== "ESCAPE");

function sumaDeCalificacion() {
    return calificacionFinal.reduce((acum, nota) => acum + nota.calificacionFinal, 0);
}

function promedioDeLaSeccion() {
    let total = sumaDeCalificacion();
    let promedio = total / calificacionFinal.length;
    return parseFloat(promedio.toFixed(2));
}

alert("El promedio total de la sección es: " + promedioDeLaSeccion() + "\nLa cantidad de estudiantes ingresados fueron: " + calificacionFinal.length +
    "\nCantidad de estudiantes con calificación menor a 10: " + contador.menores10 +
    "\nCantidad de estudiantes con calificación mayor a 10: " + contador.mayores10);
