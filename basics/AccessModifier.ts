class Point {
    a : number ;
    private b : string ;
    c : boolean;
    constructor(a?:number , b?:string , c?:boolean){
        this.a = a;
        this.b = b;
        this.c = c;

    }
    private draw = (): any => {
        console.log('A : ' +this.a + ' B: '+this.b + ' C : '+this.c);
    }
    drawing = ():any => {
        console.log("It will print the Drawing method...")
        this.draw();
    }
}
let shape = new Point(20, 'two' , false);
shape.drawing();

let shape2 = new Point(10, 'ten' , true);
//shape2.b = 'five'
shape2.drawing();
