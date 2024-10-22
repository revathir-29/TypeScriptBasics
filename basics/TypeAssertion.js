var color = 'red'; //type : string
var stringMethod1 = color.endsWith('d');
var stringMethod2 = color.includes('e');
console.log(stringMethod1);
console.log(stringMethod2);
var Color2; //type : any
Color2 = 'blue';
var endsWith = Color2.charAt(0); //type assertion
var endsWith2 = Color2.endsWith('s');
console.log(endsWith);
console.log(endsWith2);
