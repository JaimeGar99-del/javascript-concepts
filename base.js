// const videogame = {
//     id : 1,
//     nombre: "FiFA",
//     precio: 200000,
//     stock: 100
// };


// Object.keys(videogame)
// for(const clave in videogame){
//     console.log(clave, videogame[clave]);
// }
// const precios = {
//     FIFA: 200000,
//     Minecraft: 150000,
//     GTA: 300000,
//     Zelda: 180000
// };

// // Precios originales
// console.log("--- Precios originales ---");
// for (const juego in precios) {
//     console.log(juego, precios[juego]);
// }

// // Aplicar aumento del 10% y mostrar nuevos precios
// console.log("--- Precios con aumento del 10% ---");
// for (const juego in precios) {
//     precios[juego] = precios[juego] * 1.10;
//     console.log(juego, Math.round(precios[juego]));
// }

// const datosBasicos = {
//     nombre: "Carlos",
//     edad: 25
// };

// const direccion = {
//     ciudad: "Barranquilla",
//     pais: "Colombia"
// };
// const fulldates = {...datosBasicos, ...direccion}
// console.log("--------------------------");
// console.log("---datos usuario---");
// console.log("--------------------------");
// console.log("---nombre y edad---");
// console.log("--------------------------");
// console.log(datosBasicos);
// console.log("--------------------------");
// console.log("---residencia del usuario---");
// console.log("--------------------------");
// console.log(direccion);
// console.log("--------------------------");
// console.log("---datos combinados---")
// console.log("--------------------------");
// for(const userdate in fulldates){
//     console.log(userdate, fulldates[userdate]);
//     console.log("--------------------------");
// }
// const visitas = [1, 2, 3, 2, 4, 1, 5, 3, 6, 1];
// const visitasUnicas = new Set(visitas);

// console.log("--- Reporte de visitas ---");
// console.log("Total de visitas:", visitas.length);
// console.log("Visitantes únicos:", visitasUnicas.size);
// console.log("Visitas repetidas:", visitas.length - visitasUnicas.size);
// const tags = new Set();

// tags.add("javascript");
// tags.add("programacion");
// tags.add("html");
// tags.add("javascript");

// console.log("--- Verificar etiqueta ---");
// if (tags.has("javascript")) {
//     console.log("La etiqueta 'javascript' existe");
// } else {
//     console.log("La etiqueta 'javascript' no existe");
// }

// console.log("--- Eliminar etiqueta ---");
// console.log("Etiquetas antes:", tags.size);
// if (tags.delete("programacion")) {
//     console.log("Etiqueta 'programacion' eliminada");
// } else {
//     console.log("Etiqueta no encontrada");
// }
// console.log("Etiquetas después:", tags.size);

// console.log("--- Lista final de etiquetas ---");
// for (const tag of tags) {
//     console.log(tag);
// }
// const setA = new Set([1, 2, 3, 4, 5]);
// const setB = new Set([3, 4, 5, 6, 7]);
// const arrayA = [...setA]
// console.log("setA",...arrayA);
// console.log("setB",...setB );
// const interseccion = arrayA.filter(numero => setB.has(numero));
// console.log("numero en ambos:",...interseccion);

// const setA = new Set([1, 2, 3, 4, 5]);
// const setB = new Set([3, 4, 5, 6, 7]);

// const interseccion = new Set();

// for(const num of setA){
//     if(setB.has(num)){
//         interseccion.add(num);
//     }
// }
// console.log("setA:", ...setA);
// console.log("setB:", ...setB);
// console.log("numeros en comun:", ...interseccion);

// const palabras = ["javascript", "python", "javascript", "java", "python", "javascript"];

// const counter = new Map();

// for(const word of palabras){
//     const conteoActual = counter.get(word) || 0;
//     counter.set(word, conteoActual+1)
// }
// counter.forEach((conteo, word) =>{
//     console.log(word, conteo);
// });

// const catalogo = new Map();

// catalogo.set("electronica", ["Laptop", "Teclado", "Mouse"]);
// catalogo.set("ropa", ["Camiseta", "Pantalon"]);
// catalogo.set("comida", ["Arroz", "Pasta", "Atun"]);
// catalogo.get("electronica").length
// catalogo.get("ropa").push("zapatos")
// catalogo.forEach((productos, categoria) =>{
//     console.log(categoria,":", ...productos)
// });
// catalogo.forEach((productos, categoria) =>{
//     console.log("--- " + categoria + " ---");
//     for(const producto of productos){
//         console.log(producto);
//     }
// });
// function validarProducto(producto) {
//     if (!producto.id) {
//         return "ERROR: falta el id";
//     }
//     if (!producto.nombre || producto.nombre.trim() === "") {
//         return "Error: el nombre no es valido";
//     }
//     if (typeof producto.precio !== "number" || producto.precio <= 0) {
//         return "Error: el precio no es valido";
//     }
//     return `id: ${producto.id} | nombre: ${producto.nombre} | precio: ${producto.precio}`;
// }

// console.log(validarProducto({ id: 1, nombre: "Laptop", precio: 500000 }));
// console.log(validarProducto({ nombre: "Laptop", precio: 500000 }));
// console.log(validarProducto({ id: 2, nombre: "   ", precio: 500000 }));
// console.log(validarProducto({ id: 3, nombre: "Mouse", precio: -100 }));

/* crear un calculador de notas por coder (especificar aprobado y reprobado) 
calcular promedio mas alto 
requisitos: 
usar funcion calcular promedio 
usar operador ternario
*/
// const coder = ["janner","sharick", "luigui", "jaime", "isaac", "daniel", "adriano"];
// const notas = [[5,3,4],[5,4,4],[5,2,4],[5,2,4],[5,5,4],[2,3,4],[3,2,3]];


// for (let indice = 0; indice < coder.length; indice++) {
//     console.log(`Coder: ${coder[indice]}`);
//     console.log(`Notas: ${notas[indice]}`); 
//     let suma = 0;
//     for (let nota of notas[indice]) {
//         suma += nota;
        
//     }
//     console.log(suma);
//     let promedioMasAlto = 0;
//     let mejorCoder = "";

//     for (let i = 0; i < coder.length; i++) {
//         let promedio = calcularPromedio(notas[i]);
// }

// }

// function calcularpromedio(){
    
// }
// calcularpromedio();

const coder = ["janner","sharick", "luigui", "jaime", "isaac", "daniel", "adriano"];
const notas = [[5,3,4],[5,4,4],[5,2,4],[5,2,4],[5,5,4],[2,3,4],[3,2,3]];

let promedioMasAlto = 0;
let mejorCoder = "";

for (let indice = 0; indice < coder.length; indice++) {
    console.log(`Coder: ${coder[indice]}`);
    console.log(`Notas: ${notas[indice]}`); 

    let promedioActual = calcularPromedio(notas[indice]);
    let estado = promedioActual >= 3 ? "Aprobado" : "Reprobado";
    
    console.log(`Promedio: ${promedioActual} - Estado: ${estado}`);

    if (promedioActual > promedioMasAlto) {
        promedioMasAlto = promedioActual;
        mejorCoder = coder[indice];
    }
}

function calcularPromedio(notasindividuales) {
    let suma = 0;
    for (let nota of notasindividuales) {
        suma += nota;
    }
    let resultado = suma / notasindividuales.length;
    return Math.round(resultado *100)/100;
}

console.log(`EL mejor es ${mejorCoder} con un promedio de ${promedioMasAlto}`);
