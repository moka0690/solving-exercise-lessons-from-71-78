let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

 let ignoreNumbers = mix.map(function(ele){
return isNaN(parseInt(ele))? ele :""
 });
let manualjoin =ignoreNumbers.reduce((acc,ele)=> acc + ele, "");
console.log(manualjoin);




let myString = "EElllzzzzzzzeroo";

let array = myString.split('')
let result = array.filter((char, index, arr) => char !== arr[index - 1]).join('');

console.log(result);  // "Elzero"


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let concatArray = myArray.reduce((acc, curr) => acc.concat(curr), []).join('');

console.log(concatArray);
