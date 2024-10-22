/*let count = 10;
count = '10';
*/
//Eg 
let a : number;
let b : string;
let c : boolean;
let d : any;
let e : number[] = [1,2,3,4,'5'];
let f : any[] = [1,2,'3' , false];

enum Color {Red, Blue, Green} ;
enum changeColor {Red = 101 , Blue = 102 , Green = 103};
let backgroundColor = Color.Blue;
let changeBackgroundColor = changeColor.Red;

console.log(backgroundColor);
console.log(changeBackgroundColor);