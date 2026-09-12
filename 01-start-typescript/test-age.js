function canDrive(usr) {
    console.log("User is ", usr.name);
    if (usr.age >= 16) {
        console.log("User can drive");
    }
    else {
        console.log("User cannot drive");
    }
}
var me = {
    name: "Afshan Alam",
    age: 25
};
canDrive(me);
