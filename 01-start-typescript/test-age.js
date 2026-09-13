"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canDrive(usr) {
    console.log("User is ", usr.name);
    if (usr.age >= 16) {
        console.log("User can drive");
    }
    else {
        console.log("User cannot drive");
    }
}
const me = {
    name: "Afshan Alam",
    age: 25
};
canDrive(me);
//# sourceMappingURL=test-age.js.map