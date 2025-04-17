var Car = /** @class */ (function () {
    function Car(en) {
        this.engine = en;
    }
    Car.prototype.str = function (a, b, c) {
        if (typeof a === "string" && typeof b == "string") {
            return a + b;
        }
        else if (typeof a == "number" && typeof b === "number") {
            return c !== undefined ? a + b + c : a + b;
        }
    };
    return Car;
}());
var car1 = new Car("ford");
console.log(car1.str(1, 2, 3));
console.log(car1.str(100, 200));
console.log(car1.str("100", "200"));
