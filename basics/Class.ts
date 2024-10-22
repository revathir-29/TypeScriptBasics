//Interface
interface Inter {
    x:number,
    y:string,
    z:number,
    draw : () => void
}

let drawing = (point: Inter) => {
    point.draw();
}
let forDraw = () => {

}
drawing({x:1 , y: '2' , z: 4, draw:forDraw} )

//class
class Point {
    a : number ;
    b : string ;
    c : boolean;
    draw = (): any => {
        console.log('A : ' +this.a + ' B: '+this.b + ' C : '+this.c);
    }
    drawing : () => {
        //this.draw();
        draw();
    }
}
let shape = new Point();
shape.a = 5;
shape.b = 'five';
shape.c = true;
shape.draw();

let shape2 = new Point();
shape2.a = 10;
shape2.b = 'thousand';
shape2.c = false;
shape2.draw();
