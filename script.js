//Dot notaion practice

let storeManager = {}
storeManager.health = 30;
storeManager.socialSkills = 90;
storeManager.emotionalState = 70;
storeManager = {health: storeManager.health}
console.log(storeManager)

//Object literal - with the assignment operator ":" 

let tribalSheikh = {
  name: "Theeb Al-Gaddafi Al-Enzi",
  tribe: "Banu Gadhadfa",
  status: "Sheikh",
  marital: "Married",
  children: "15",
  age: "56"
}

tribalSheikh = {name: tribalSheikh.name};
console.log(tribalSheikh);

//Brackets notation

let cityBangkok = {}
cityBangkok['weather'] = 'Sunny & very humid';
cityBangkok['population'] = '71.7 million';
cityBangkok['province'] = 'Krung Thep Mahan Nakhon';
cityBangkok['expats'] = '300,000'
cityBangkok = cityBangkok.weather;
console.log(cityBangkok)

//Bracket notation, evaluate expressions - Arrays, For Loops and Objects utillized


let arrLearnJavascript = ['functions', 'arrays', 'objects'];
let code = {
  functions: 99,
  arrays: 60,
  objects: 90
}

for (let i = 0; i < arrLearnJavascript.length; ++i) {
  console.log(code[arrLearnJavascript[i]]);
}

//Arrays are objects

let frutas = [];
  frutas.push('piña');
  frutas.push('guineo');
  frutas.push('maracuyá')
  frutas.pop();
console.log(frutas);


// Take all the arguments and push them into an array

function arrayConstructor(uno, dos, tres) {
  let arr = [];
  arr.push(uno);
  arr.push(dos);
  arr.push(tres);
  console.log(arr);
  return arr;
}

let arrSimple = arrayConstructor('uno', 'dos', 'tres');
console.log(arrSimple);


//Math object

let miNumero = Math.pow(5, 5);
console.log(miNumero);


let x = 6.1768787878;
let y = 5;
let z;

z = Math.trunc(x)
console.log(z);


//Math.random often used for games, simulations and random selections
console.log(Math.random());


//
let saludar = 'Hola';
let usario = 'Marcos';

console.log(saludar + usario);


//June.07.2025

var vegetales = ['perejil', 'cebolla', 'zanahoria']

//console.log(vegetales.length)
//console.log(vegetales[1])

for (c = 0; c < vegetales.length; ++c) {
  console.log(vegetales[c]);
}


let saludá = 'Quiubo ';
let nombre = 'Roberto';

console.log(saludá + nombre);

console.log(saludá.concat(nombre));


//Exercise 01
let ropa = [];

ropa.push('camiseta');
ropa.push('pantalones vaqueros');
ropa.push('zapatillas para correr');
ropa.push('calzoncillo');
ropa.push('sudadera');
//ropa.pop();

console.log(ropa);

//Exercise 02

let autoFavorito = {};

autoFavorito.color = 'plata';
autoFavorito.marca = 'Lamborghini';
autoFavorito.versión01 = 'Aventador';
autoFavorito.versión02 = 'Murciélago';
console.log(autoFavorito);



//Catch block
try {
  let e = noExisteTalCosa
} catch (error) {
  console.log('Error encontrado');
}


function sumaDosNumeros(a, b) {
  try {
      console.log(a + b);
  } catch(err) {
    console.log(err)
  }
}
sumaDosNumeros(5, '5');


//Exercise Error Prevention
//Try block

try {
  function addUpNumbers(a, b) {
    console.log(Number(a) + Number(b))
  } 
  addUpNumbers(5, '6');
} catch (err) {
    console.log(err);
  }


//Extra practice

try {
  function addYears(x, y) {
    console.log(Number(x) + Number(y))
  } 
  addYears('15', '20');
} catch (err) {
  console.log(err)
}


///Typeof 

function twoNumbersAdded(m, n) {
  try {
   if (typeof(m) != 'number') {
    throw new ReferenceError('The first argument is not a number.')
   } else if (typeof(n) != 'number') {
    throw new ReferenceError('The second argument is not a number.')
   } else {
    console.log(m + n)
   }
  } catch (err) {
    console.log(err)
  }
}
twoNumbersAdded(50, 500);

//Extra practice to reinforce the concepts of try catch blocks and typeof

function addedIncome(c, d) {
  try {
    if (typeof(c) != 'number') {
      throw new ReferenceError('El primer argumento no es un ingreso')
    } else if (typeof(d) != 'number') {
      throw new ReferenceError('El segundo argumento no es un ingreso')
    } else {
      console.log('Vos ganás $' + (c + d) + '.00' + ' al mes.')
    }
  } catch (err) {
    console.log(err)
  }
}
addedIncome(2500, 3000)
console.log('Estoy muy orgulloso de vos. ¡Sos lo máximo!')























