// Desafio 1
function compareTrue(a, b) {
  return (a === true && b === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 - se eu não colocar o espaço dentro ele separa uma por uma das letras.

function splitSentence(str) {
  let array = str.split(' ');
  return array 
}

// Desafio 4 'ÚLTIMO ITEM, PRIMEIRO ITEM' - Havia feito com slice, concat e join, mas o Brunão me ajudou a pensar simples.
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5 considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6 demorei para desenvolver nessa porque ainda tenho dificuldade no chamar o conteúdo da posição do array.
function highestCount(numbers) {
  let tallerId = 0;
  let cont = 0;
  for (let key in numbers) {
    if (numbers[key] > tallerId) {
      tallerId = numbers[key];
    }
    if (numbers[key] < 0) {
      tallerId = numbers[key];
    }
  }
  for (let key in numbers) {
    if (tallerId === numbers[key]) {
      cont += 1;
    }
  }
  return cont
}

// Desafio 7 Muito massa, fiquei uma cara procurando a função módulo até a Laura Fumagalli me dizer, busca com outra palavra, tipo um numero absoluto. ai achei a ferramenta "Math.abs" na documentação =)

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
// Desafio 8

function fizzBuzz(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (arr[index] % 3 === 0) {
      newArr.push('fizz');
    } else if (arr[index] % 5 === 0) {
      newArr.push('buzz');
    } else {
      newArr.push('bug!');
    }
  }
  return newArr;
}
// Desafio 9  Pesquisei na documentação as opções que executavam essas trocas,achei o "replace" mas não consegui implementar direto, mesmo assistindo vídeos da Trybe, na string e preferi fazer essa transformação em array, como o Brunão me lembrou que poderia ser mais.

function encode(str) {
  const arr = str.split('');
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === 'a') {
      arr.splice(index, 1, '1');
    } else if (arr[index] === 'e') {
      arr.splice(index, 1, '2');
    } else if (arr[index] === 'i') {
      arr.splice(index, 1, '3');
    } else if (arr[index] === 'o') {
      arr.splice(index, 1, '4');
    } else if (arr[index] === 'u') {
      arr.splice(index, 1, '5');
    }
  }
  return arr.join('');
}

function decode(str) {
  const arr = str.split('');
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === '1') {
      arr.splice(index, 1, 'a');
    } else if (arr[index] === '2') {
      arr.splice(index, 1, 'e');
    } else if (arr[index] === '3') {
      arr.splice(index, 1, 'i');
    } else if (arr[index] === '4') {
      arr.splice(index, 1, 'o');
    } else if (arr[index] === '5') {
      arr.splice(index, 1, 'u');
    }
  }
  return arr.join('');
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
