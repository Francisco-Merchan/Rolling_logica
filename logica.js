// Tarea 1 - comprobar que se ingresen numeros y no letras
/*
let num1 = parseInt(prompt(`Ingrese el primer numero`));
let num2 = parseInt(prompt(`Ingrese el segundo numero`));
if (num1 > num2) {
  alert(`${num1} es mayor que ${num2}`);
} else if (num2 > num1) {
  alert(`${num2} es mayor que ${num1}`);
} else {
  alert(`${num1} es igual a ${num2}`);
}
*/

// Tarea 2 - preguntar como verificar que se ingresan numero y no letras
/*
for (let i = 0; i < 5; i++) {
  let numbers = [];
  numbers[i] = parseInt(prompt(`Ingrese el elemento ${i + 1} del arreglo`));
  if (numbers[i] % 2 === 0) {
    console.log(`El elemento ${i + 1} es un ${numbers[i]} y es un numero par`);
  } else {
    console.log(
      `El elemento ${i + 1} es un ${numbers[i]} y es un numero impar`
    );
  }
}
*/

//Tarea 3
/*
let tamañoArray = parseInt(prompt(`Cuantos elementos tendra el arreglo?`));
let arrayNumeros = [];
let suma = 0;
for (let i = 0; i < tamañoArray; i++) {
  arrayNumeros[i] = parseInt(
    prompt(`Ingrese el elemento ${i + 1} del arreglo`)
  );
  suma += arrayNumeros[i];
}
alert(
  `El promedio de los numeros inresados es ${(suma / tamañoArray).toFixed(2)}`);
*/

//Tarea 4
/*
let tamañoArray = parseInt(prompt(`Cuantos elementos tendra el arreglo?`));
let arrayNumeros = [];
let arrayMayores = [];
let z = 0;
for (let i = 0; i < tamañoArray; i++) {
  arrayNumeros[i] = parseInt(
    prompt(`Ingrese el elemento ${i + 1} del arreglo`)
  );
  if (arrayNumeros[i] > 10) {
    arrayMayores[z] = arrayNumeros[i];
    z++;
  }
}
if (z != 0) {
  alert(`El arreglo con numeros mayores a 10 es ${arrayMayores}`);
} else {
  alert(`Ingresaste un arreglo que no contiene numeros mayores a 10`);
}
*/

//Tarea 5 - DUDA ¿Que sucede si el ususario ingresa una letra y la transformo a numero con parseInt?
/*
function booleanos() {
  let tamañoArray = parseInt(prompt(`Cuantos elementos tendra su arreglo?`));
  let cantidad = 0;
  for (let i = 0; i < tamañoArray; i++) {
    let element = parseInt(
      prompt(
        `Que valor tendra el elemento ${i + 1} de su arreglo
        1 - True
        2 - False`
      )
    );
    if (element === 1) {
      cantidad++;
    }
  }
  if (cantidad != 0) {
    alert(`Su arreglo tiene ${cantidad} elementos True`);
  } else {
    alert(`Su arreglo no tiene elementos True`);
  }
}
booleanos();
*/

//Tarea 6 - DUDA ¿como transformo el numero infresado en un numero sin puntuacion en caso de que el usuario ingrese 17.098.242?
/*
let nombrePais = prompt(
  `De que pais quiere conocer su proporcion de area mundial?`
);
let area = parseInt(
  prompt(
    `Ingrese la superficie total de ${nombrePais} (En kilometros y sin puntos)`
  )
);
function areaMundial(nombre, sup) {
  const tierra = 148940000;
  alert(
    `El parcentaje de ${nombre} a nivel mundial es de ${(
      (sup / tierra) *
      100
    ).toFixed(2)}%`
  );
}
areaMundial(nombrePais, area);
*/

//---------------------------------------------------------------------------------------

//Escribe un programa que pida una frase y escriba las vocales que aparecen --- ¿Como seria con metodos avanzados?
/*
let frase = prompt(`Escriba una frase`);
let fraseToArray = frase.split("");
let arrayVocales = [];
for (let i = 0; i < fraseToArray.length; i++) {
  fraseToArray[i].toLowerCase;
  console.log(fraseToArray[i]);
  if (
    fraseToArray[i] === "a" ||
    fraseToArray[i] === "e" ||
    fraseToArray[i] === "i" ||
    fraseToArray[i] === "o" ||
    fraseToArray[i] === "u"
  ) {
    arrayVocales.push(fraseToArray[i]);
  }
}
console.log(arrayVocales);
*/

// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad). El algoritmo para calcular la letra del dni es el siguiente :
//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
/*
let dni = parseInt(prompt(`ingrese su numero de documento sin puntos`));
let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
while (isNaN(dni) && dni > 0 && dni < 99999999) {
  alert(`Ingrso su DNI con numeros de putuacion o no ingreso numeros`);
  dni = parseInt(prompt(`ingrese su numero de documento sin puntos`));
}
let posicionArray = parseInt(dni % 23);
console.log(posicionArray);
alert(`La letra de su dni es ${letras[posicionArray]}`);
*/

//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”
/*
let string1 = prompt(`Ingrese una frase`);
let string2 = string1.split("");
let string3 = [];
let = length = string2.length;
for (let i = 0; i < length; i++) {
  string3[i] = string2.pop();
}
console.log(string3);
*/

//Multiplicar los valores de un arreglo y almacenar los nuevos valores multiplicados en un nuevo array.
/*
let arrayNumbers = [1, 2, 3, 4, 5];
let array2 = arrayNumbers.map((number) => number * 2);
console.log(array2);
*/

//Crear una función que tome una matriz de nombres y devuelva una matriz en la que sólo la primera letra de cada nombre esté en mayúsculas.
/*
let array1 = ["francisco", "daniel", "manuel", "jose", "mathias", "eSTeban"];
function letraMayus(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
    let array2 = array[i].split("");
    let mayus = array2[0].toUpperCase();
    array2.splice(0, 1, mayus);
    array2 = array2.join("");
    console.log(array2);
  }
}
letraMayus(array1);
/*

// Crear una función para mezclar los elementos de dos arrays. Intercalando los elementos de ambos arreglos de forma alternada.
/*
let array1 = ["1", "2", "3", "4", "5"];
let array2 = ["A", "B", "C"];
let array3 = [];
let z = 0;
for (let i = 0; i < array1.length; i++) {
  array3.push(array1[i]);
  if (z < array2.length) {
    array3.push(array2[z]);
    z++;
  }
}
console.log(array3);
*/

// 6- Loves Me, Loves Me Not
/*
let petalos = parseInt(prompt(`Cuantos petalos tendra su flor?`));
let array = [];
for (let i = 0; i < petalos; i++) {
  if (i === petalos - 1) {
    if (i % 2 === 0) {
      array.push("Love Me".toUpperCase());
    } else {
      array.push("Love Me Not".toUpperCase());
    }
  } else {
    if (i % 2 === 0) {
      array.push("Love Me");
    } else {
      array.push("Love Me Not");
    }
  }
}
console.log(array);
*/

// 7-Crear una función que tome una array de números y nos devuelva un texto que diga: El número más bajo es y el más alto es
/*
let array = ["3", "7", "1"];
function number(array) {
  array.sort((a, b) => a - b);
  return console.log(
    `El numero menor es ${array[0]} y el numero mayor es ${
      array[array.length - 1]
    }`
  );
}
number(array);
*/

// 8 -Crear una función que tome una array de palabras y retorne la palabra más larga dentro de esa array:
/*
let array = ["Francisco", "Manuel", "Jose", "Mathias", "Ricardo"];
function contarLetras(array) {
  let tamaño = 0;
  let z;
  for (let i = 0; i < array.length; i++) {
    array[i].split("");
    if (tamaño < array[i].length) {
      tamaño = array[i].length;
      z = i;
    }
  }
  return console.log(`La palabra mas larga es ${array[z]}`);
}
contarLetras(array);
*/

// 9-
// Crear una funcion que tome una palabra y nos devuelva si una palabra es un palíndromo (una palabra que se lee tanto de izquierda a derecha, como de derecha a izquierda). El programa retornará true si es un palíndromo y false si no lo es.
/*
function palindromo(array) {
  let array1 = array.split("");
  let array2 = [];
  for (let i = 0; i < array1.length; i++) {
    array2.unshift(array1[i]);
  }
  array2 = array2.join("");
  if (array === array2) {
    console.log(`La palanra es un palindromo`);
  } else {
    console.log(`La palabra no es un palindromo`);
  }
}
palindromo("ana");
*/

//12- Remover elementos duplicados de un array:
/*
let array1 = ["1", "2", "Jose", "auto", "7", "Jose"];
for (let i = 0; i < array1.length; i++) {
  for (let z = i + 1; z < array1.length; z++) {
    if (array1[i] === array1[z]) {
      array1.splice(z, 1);
    }
  }
}
console.log(array1);
*/
