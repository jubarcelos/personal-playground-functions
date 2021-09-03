// Desafio 10
function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs.length === 0) {
    return "Vazio!"
  } else {
    arrayTechsSort = arrayTechs.sort();
    for (index = 0; index < arrayTechs.length; index += 1){
      techs = {
        tech: arrayTechsSort[index],
        name: name
        }
      arrayTechsObject.push(techs);
    }
    return arrayTechsObject;
  }
}
// Desafio 11
// Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais
// Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações

// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// function getCompare(array){
//   for (index = 0; index < array.length; index += 1) {
//     if (array[index] < 0 || array[index] > 9 ) {
//       return "não é possível gerar um número de telefone com esses valores";
//     } 
//     let countNumber = 0;
//     for(let i of array) {
//       if(array[index] === i){
//         countNumber += 1;
//       }
//     }
//     if( countNumber > 2){
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//   }
// }
// console.log(getCompare(arr));


// function generatePhoneNumber(foneNumbers) {
//   if (foneNumbers.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   }
//   let getErro = false;
//   for (let index = 0; index < foneNumbers.length; index += 1) {
//     let countNumber = 0;
//     if (foneNumbers[index] > 9 || foneNumbers[index] < 0) {
//       getErro = true;
//     }
//     for (let number of foneNumbers) {
//       if (foneNumbers[index] === number) {
//         countNumber += 1;
//       }
//     }
//     if (countNumber > 2) {
//       getErro = true;
//     }
//   }
//   if (getErro === true) {
//     return 'não é possível gerar um número de telefone com esses valores';
//   }
//   return `(${foneNumbers[0]}${foneNumbers[1]}) ${foneNumbers[2]}${foneNumbers[3]}${foneNumbers[4]}${foneNumbers[5]}${foneNumbers[6]}-${foneNumbers[7]}${foneNumbers[8]}${foneNumbers[9]}${foneNumbers[10]}`;
// }


function generatePhoneNumber(array) {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
