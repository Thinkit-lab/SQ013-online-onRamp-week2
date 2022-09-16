function sumOfMultiples(arr) {
   let sum = 0;

   for (let num of arr){
       if (num % 3 == 0 || num % 5 == 0){
           sum += num;
       }
   } return (sum);
}
module.exports = sumOfMultiples
