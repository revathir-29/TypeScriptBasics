import { Point, Point2 } from './point'

let shape = new Point(20, 'two' , false);
shape.a = 30;
shape.B = 'Thirty';
console.log("B : " +shape.B);
shape.drawing();

let shape2 = new Point(10, 'ten' , true);
//shape2.b = 'five'
shape2.drawing();
