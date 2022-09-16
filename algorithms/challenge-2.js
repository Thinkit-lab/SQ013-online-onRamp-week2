function sumOfTwoSmallestNums(arr){
 let sortedArray = arr.sort(function(a,b){return a - b});
 let sum = sortedArray[0] + sortedArray[1];
 return (sum);
 
}
console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));

module.exports = sumOfTwoSmallestNums
