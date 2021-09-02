// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3

// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

function splitSentence(str) {
  return array = str.split(" ");
}

// Desafio 4 'ÚLTIMO ITEM, PRIMEIRO ITEM' - Aqui eu busquei na documentação essas duas ferramentas de auxilio, o slice que serve pra retorna uma cópia de parte de um array, pode ser a posição exata ou o intervalo. Se der um intervalo ele pega o primeiro desse intervalo. Essa ferramenta o Fernando Gós que me alertou, enquanto eu tentava usar shift e pop que não dava certo. Usei também o concat para unir os arrays e join para juntar os dois em um array só e colocar um espaço entre eles.

function concatName(arr) {
 let last = arr.slice(-1);
 let first = arr.slice(0, 1);
 let newarr = last.concat(first);
 return newarr.join(', ');
}

// Desafio 5 considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties){
  return (wins * 3) + (ties * 1)
}

// Desafio 6 demorei para desenvolver nessa porque ainda tenho dificuldade no chamar o conteúdo da posição do array.
function highestCount(numbers) {
  let tallerId = 0;
  let cont = 0;
  for (let key in numbers) {
    if (numbers[key] > tallerId) {
      tallerId = numbers[key];
    }
    if(numbers[key]< 0) {
      tallerId = numbers[key];
    }
  }
  for (let key in numbers) {
    if (tallerId === numbers[key]){
    cont += 1;
    }
  }
  return cont
}

// Desafio 7 Muito massa, fiquei uma cara procurando a função módulo até a Laura Fumagalli me dizer, busca com outra palavra, tipo um numero absoluto. ai achei a ferramenta usada aqui na documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  =)

function catAndMouse(mouse, cat1, cat2) {
   if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
   return "cat1"
 } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
   return "cat2"
 } else {
  return "os gatos trombam e o rato foge"
 }
}
// Desafio 8
// precisei criar um array para que ele retornasse todas as strings que recebia. Dica recebida pelo grande Fernando Gós.

function fizzBuzz(arr) {
  let newarr = [];
  for (index = 0; index < arr.length; index+= 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 ===0) {
      newarr.push ("fizzBuzz");
    }else if (arr[index] % 3 === 0) {
      newarr.push("fizz");
    }else if (arr [index] % 5 ===0) {
      newarr.push("buzz");
    }else{
      newarr.push("bug!");
    }
  }
  return newarr
}
// Desafio 9
// var re = /maçãs/gi;
// var str = 'As maçãs são redondas. As maçãs são suculentas.';
// var newstr = str.replace(re, 'laranjas');
// console.log(newstr);
// // retorna
// // "As laranjas são redondas. As laranjas são suculentas."

// function encode(str) {
//   for (let i = 0; i < str.length; i+= 1) {
//     let new1 = str.replace('a', '1');
//     new1 = str.replace('e', '2');
//     new1= str.replace('i', '3');
//     new1= str.replace('o', '4');
//     new1 = str.replace('u', '5');
//   }
// return new1
// }
function encode(str) {
  const arr = str.split('');
  for(i = 0; i < arr.length; i+= 1){
    if (arr[i] === 'a') {
      arr.splice(i, 1, '1');
    } else if (arr[i] === 'e') {
      arr.splice(i, 1, '2');
    } else if (arr[i] === 'i') {
      arr.splice(i, 1, '3');
    } else if (arr[i] === 'o') {
      arr.splice(i, 1, '4');
    } else if (arr[i] === 'u') {
      arr.splice(i, 1, '5');
    }
  }
  return arr.join('');
}

function decode(str) {
  const arr = str.split('');
  for(i = 0; i < arr.length; i+= 1){
    if (arr[i] === '1') {
      arr.splice(i, 1, 'a');
    } else if (arr[i] === '2') {
      arr.splice (i, 1, 'e');
    } else if (arr[i] === '3') {
      arr.splice (i, 1, 'i');
    } else if (arr[i] === '4') {
      arr.splice (i, 1, 'o');
    } else if (arr[i] === '5') {
      arr.splice (i, 1, 'u');
    }
  }
  return arr.join('');
}
console.log(decode("Seu animalzinho"))

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
