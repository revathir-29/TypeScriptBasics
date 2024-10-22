class Point {
    a : number ;
    b : string ;
    c : boolean;
    constructor(a?:number , b?:string , c?:boolean){
        this.a = a;
        this.b = b;
        this.c = c;

    }
    draw = (): any => {
        console.log('A : ' +this.a + ' B: '+this.b + ' C : '+this.c);
    }
    drawing : () => {
        draw();
    }
}
let shape = new Point();
shape.draw();

let shape2 = new Point();
shape2.draw();
