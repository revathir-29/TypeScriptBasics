var drawing = function (point) {
    point.draw();
};
var forDraw = function () {
};
drawing({ x: 1, y: '2', z: 4, draw: forDraw });
//class
var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.draw = function () {
            console.log('A : ' + _this.a + ' B: ' + _this.b + ' C : ' + _this.c);
        };
    }
    return Point;
}());
var shape = new Point();
shape.a = 5;
shape.b = 'five';
shape.c = true;
shape.draw();
var shape2 = new Point();
shape2.a = 10;
shape2.b = 'thousand';
shape2.c = false;
shape2.draw();
