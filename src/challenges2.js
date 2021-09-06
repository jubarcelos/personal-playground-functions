// Desafio 10

function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs.length === 0) {
    return "Vazio!"
  } else {
    arrayTechsSort = arrayTechs.sort();
    for (index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechsSort[index],
        name: name
      }
      arrayTechsObject.push(techs);
    }
    return arrayTechsObject;
  }
}

// Desafio 11 - O mais difícil foi criar o contador, tentei de diferentes formas e não consegui fazer rodar, alguns colegas me mostram maneiras que eu não entendia, mas o Leandro Bonfim me apresentou essa forma de ver um array como um objeto (nesse caso) e funcionou na minha cabeça.

function generatePhoneNumber(array){
  let phoneNumber = [];
  let numberCount = [0,0,0,0,0,0,0,0,0,0];
  if (array.length !== 11) {
    return `Array com tamanho incorreto.` 
  }
  for (index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 ) {
      return `não é possível gerar um número de telefone com esses valores`;
    }
    numberCount[array[index]] += 1;
    if( numberCount[array[index]] >= 3){
      return `não é possível gerar um número de telefone com esses valores`;
    } 
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA) && lineC < (lineB + lineA) && lineB <(lineA + lineC) && lineA < (lineB + lineC)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  let num = str.replace(/[^0-9]/g,'');
  let result = '0';
  for (index = 0; index < num.length; index += 1){
    result += num[index];
    Number.parseInt(result, 10);
    console.log(result);
  }if (result === 1) {
    return `${result} copo de água.`
  } else if (result > 1) {
    return `${result} copos de água.`
  }
}
hydrate('1 copo, 2 canecas, 3 sei la')

// var num = 15;
// alert(String.replace(num, /5/, '2'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
