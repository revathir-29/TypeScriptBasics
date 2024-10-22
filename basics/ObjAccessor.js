var Point = /** @class */ (function () {
    function Point(a, b, c) {
        var _this = this;
        this.a = a;
        this.b = b;
        this.c = c;
        this.draw = function () {
            console.log('A : ' + _this.a + ' B: ' + _this.b + ' C : ' + _this.c);
        };
        this.drawing = function () {
            console.log("It will print the Drawing method...");
            _this.draw();
        };
    }
    Object.defineProperty(Point.prototype, "B", {
        get: function () {
            return this.b;
        },
        set: function (value) {
            this.b = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var shape = new Point(20, 'two', false);
shape.a = 30;
shape.B = 'Thirty';
console.log("B : " + shape.B);
shape.drawing();
var shape2 = new Point(10, 'ten', true);
//shape2.b = 'five'
shape2.drawing();
