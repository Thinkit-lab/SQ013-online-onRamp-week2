function squareDigit(str) {
    let result = '';
 for (let num of str){
     let square = num ** 2;
     result += square;
    //  console.log(result);

 }
 return (result);
 }
 console.log(squareDigit('289'));
  module.exports =squareDigit
