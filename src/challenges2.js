// Desafio 10
let arrayTechs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Lucas";
function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs == 0) {
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
techList(arrayTechs, name)
// // Desafio 11
// function generatePhoneNumber() {
 
// }

// // Desafio 12
// function triangleCheck() {
  
// }

// // Desafio 13
// function hydrate() {
  
// }

// module.exports = {
//   generatePhoneNumber,
//   techList,
//   hydrate,
//   triangleCheck,
// };
