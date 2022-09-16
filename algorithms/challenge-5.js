function accum(str) {
 let result = " ";
 for (let letter of str){
     result += letter.toUpperCase();
     for (let i = 1; i <= str.indexOf(letter); i++){
         result += letter.toLowerCase();
     }
     if (str.indexOf(letter) < str.length - 1){
        result += "-";
     }
 }
 return (result.trim());
 }
 console.log(accum("RqaEzty"));

  module.exports =accum