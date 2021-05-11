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

//Tarea 5
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

//Tarea 6 - como transformo el area en un numero sin puntuacion en caso de que el usuario ingrese 17.098.242
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
