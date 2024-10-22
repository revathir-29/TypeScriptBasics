var Point = /** @class */ (function () {
    function Point(a, b, c) {
        var _this = this;
        this.draw = function () {
            console.log('A : ' + _this.a + ' B: ' + _this.b + ' C : ' + _this.c);
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }
    return Point;
}());
var shape = new Point();
shape.draw();
var shape2 = new Point();
shape2.draw();
