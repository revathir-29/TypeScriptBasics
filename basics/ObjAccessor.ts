class Point {
    constructor(public a?:number ,private b?:string ,private c?:boolean){
    }
    private draw = (): any => {
        console.log('A : ' +this.a + ' B: '+this.b + ' C : '+this.c);
    }
    drawing = ():any => {
        console.log("It will print the Drawing method...")
        this.draw();
    }

    get B() {
        return this.b;
    }
    set B(value) {
        this.b = value;

    }
}
let shape = new Point(20, 'two' , false);
shape.a = 30;
shape.B = 'Thirty';
console.log("B : " +shape.B);
shape.drawing();

let shape2 = new Point(10, 'ten' , true);
//shape2.b = 'five'
shape2.drawing();
