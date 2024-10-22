/*let count = 10;
count = '10';
*/
//Eg 
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, '5'];
var f = [1, 2, '3', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var changeColor;
(function (changeColor) {
    changeColor[changeColor["Red"] = 101] = "Red";
    changeColor[changeColor["Blue"] = 102] = "Blue";
    changeColor[changeColor["Green"] = 103] = "Green";
})(changeColor || (changeColor = {}));
;
var backgroundColor = Color.Blue;
var changeBackgroundColor = changeColor.Red;
console.log(backgroundColor);
console.log(changeBackgroundColor);
