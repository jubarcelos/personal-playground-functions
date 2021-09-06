// Desafio 10

function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs.length === 0) {
    return 'Vazio!';
  } arrayTechsSort = arrayTechs.sort();
  for (let index = 0; index < arrayTechs.length; index += 1) {
    techs = {
      tech: arrayTechsSort[index],
      name: name,
    };
    arrayTechsObject.push(techs);
  }
  return arrayTechsObject;
}

// Desafio 11 - O mais difícil foi criar o contador, tentei de diferentes formas e não consegui fazer rodar, alguns colegas me mostram maneiras que eu não entendia, mas o Leandro Bonfim me apresentou essa forma de ver um array como um objeto (nesse caso) e funcionou na minha cabeça.

function generatePhoneNumber(array) {
  let numberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } numberCount[array[index]] += 1; // identifica o numero que recebe na posição index do array
    if (numberCount[array[index]] >= 3) { // posição do contador com o numero do array
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC 
    || lineB + lineC < lineA 
    || lineC + lineA < lineB) {
    return false;
  }
  return true;
}
// Desafio 13 
// esse site me ajudou na criação do array de numeros inteiros.
// https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/

function hydrate(str) {
  let myInt = str.replace(/\D/g, ' '); // deixa só os numeros, substitui o que não é número por vazio. Dica de Alex Weyne no StackOverFlow https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466
  let newNum = (myInt) => Number(myInt); // função para transformar em numeral com retorno específico
  let intArr = Array.from(String(myInt), newNum); // faz array de numeros
  let result = 0;
  for (let index = 0; index < intArr.length; index += 1) {
    result += intArr[index];
  }
  if (result === 1) {
    return `${result} copo de água`;
  } if (result > 1) {
    return `${result} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
