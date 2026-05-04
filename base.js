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
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);
const arrayA = [...setA]
console.log("setA",...arrayA);
console.log("setB",...setB );
const interseccion = arrayA.filter(numero => setB.has(numero));
console.log("numero en ambos:",...interseccion)