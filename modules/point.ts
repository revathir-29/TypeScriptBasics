export class Point {
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

export class Point2 {
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