var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.canDrive = function () {
        console.log("User is => ", this.name);
        if (this.age >= 18) {
            console.log(this.name, "can drive");
        }
        else {
            console.log(this.name, "cannot drive");
        }
    };
    return Person;
}());
var Afshan = new Person('Afshan Alam', 25);
Afshan.canDrive();
