var Point = /** @class */ (function () {
    function Point(a, b, c) {
        var _this = this;
        this.draw = function () {
            console.log('A : ' + _this.a + ' B: ' + _this.b + ' C : ' + _this.c);
        };
        this.drawing = function () {
            console.log("It will print the Drawing method...");
            _this.draw();
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }
    return Point;
}());
var shape = new Point(20, 'two', false);
shape.drawing();
var shape2 = new Point(10, 'ten', true);
//shape2.b = 'five'
shape2.drawing();
