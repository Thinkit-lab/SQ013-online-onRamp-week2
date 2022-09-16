const letters = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    // let result = [];
    // for (let i = 0; i < text.length; i++) {
    //   let letter = text[i].toLowerCase();
    //   if (letters.includes(letter)) {
    //     result.push(letters.indexOf(letter) + 1);
    //   }
    // }
    // return result.join(" ");
    let result = new Array();
    for (let letter of text){
      letter = letter.toLowerCase();
      let position = letters.indexOf(letter) + 1;
      result.push(position);
    }
    return result.join(" ");
 }

  module.exports = alphabetPosition
  console.log(alphabetPosition('sucess'));