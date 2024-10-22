let color = 'red'; //type : string
let stringMethod1 = color.endsWith('d');
let stringMethod2 = color.includes('e');
console.log(stringMethod1);
console.log(stringMethod2);

let Color2; //type : any
Color2 = 'blue';
let endsWith = (<string> Color2).charAt(0); //type assertion
let endsWith2 = (Color2 as string).endsWith('s');
console.log(endsWith);
console.log(endsWith2);
