var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = /** @class */ (function () {
    function Item() {
        this.id = '';
        this.description = '';
        this.price = 0;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    return Item;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheelCount = 0;
        return _this;
    }
    Bicycle.prototype.getWheelCount = function () {
        return this.wheelCount;
    };
    return Bicycle;
}(Item));
var bicycle = new Bicycle();
bicycle.id = 'B001';
bicycle.description = 'Mountain Bike';
bicycle.price = 500;
bicycle.wheelCount = 2;
console.log('Bicycle ID:', bicycle.getId());
console.log('Bicycle Description:', bicycle.description);
console.log('Bicycle Price:', bicycle.price);
console.log('Bicycle Wheel Count:', bicycle.getWheelCount());
