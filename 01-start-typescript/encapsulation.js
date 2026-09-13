var Encapsulation = /** @class */ (function () {
    function Encapsulation() {
        this.name = '';
    }
    Encapsulation.prototype.consctructor = function (name) {
        this.name = name;
    };
    Object.defineProperty(Encapsulation.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Encapsulation.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Encapsulation;
}());
var encap = new Encapsulation();
console.log(encap.getName);
