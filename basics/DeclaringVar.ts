function doSomething() {
    for(var i=0; i<5 ; i++) {
        console.log(i);
    }
    console.log("Finally the count is (using var) : ", i); 
}
doSomething();

function doWithLet() {
    for(let i =0; i<=10 ; i++) {
        console.log(i*2);
    }
    console.log("Finally the multiplication of 2 is (using let) : ", i*2);
}
doWithLet();