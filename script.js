// Hoisting
// console.log(x);
// var x = 10;

// // Closure
// function contador() {
//   let num = 0;
//   return function() {
//     num++;
//     console.log(num);
//   };
// }

// Ejercicios
// 1. Crear una función que sume dos números

// 2. Crear un contador con closure
  // function contador1() {
  //   let num = 0;
  //   return function() {
  //     num++;
  //     console.log(num);
  //   };
  // }
  // const ejecutar_contador = contador1();

  // for(let i = 0; i<=10; i++){
  //   ejecutar_contador();
  // };
// 3. Diferencia entre var, let, const
// 4. Crear un callback simple
// 5. Manipular DOM (crear elemento)
//Crear una función que reciba 2 números y retorne la suma
  // function suma(){
  //   let num1 = Number(prompt('ingresar num1:' ));
  //   let num2 = Number(prompt('ingresar num2:' ));
    
  //   let resultado = num1 + num2;
  //   console.log(resultado);
  // }
  // suma();
//Crear una función que diga si un número es par o impar
  // function impar(){
  //   let num = Number(prompt('ingresar numero:' ));
  //   if (num % 2 === 0){
  //     console.log(`${num} es par`);
  //   }else{
  //     console.log(`${num} es impar`);
  //   }
  // }
//Convertir una lista de números en sus cuadrados
  // const numeros = [2,5,7,9,13];
  // let cuadrados = [];

  // for (let x of numeros) {
  //     cuadrados.push(x ** 2);
      
  // }
  // console.log(numeros)
  // console.log(cuadrados);
//Contar cuántas letras tiene una palabra
  let palabra = prompt('ingresar palabra')
  let count_letter = palabra.length;
  console.log(count_letter)
//Invertir un string