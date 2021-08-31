// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * altura) / 2
}

// Desafio 3

// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

function splitSentence(str){
  return array = str.split(" ");
}

// Desafio 4 'ÚLTIMO ITEM, PRIMEIRO ITEM'
function concatName(arr) {
 let first = arr.slice(-1);
 let last = arr.slice(0, 1);
 let newarr = last.concat(first);
 return newarr.join(', ');
}


// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
