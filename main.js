let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

 let ignoreNumbers = mix.map(function(ele){
return isNaN(parseInt(ele))? ele :""
 });
let manualjoin =ignoreNumbers.reduce((acc,ele)=> acc + ele, "");
console.log(manualjoin);

