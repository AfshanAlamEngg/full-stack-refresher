"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Encapsulation {
    name;
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
const encap = new Encapsulation('Afshan Alam');
console.log(encap.getName);
//# sourceMappingURL=encapsulation.js.map