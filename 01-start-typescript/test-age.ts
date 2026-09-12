interface User {
    name: string;
    age: number;
}

function canDrive(usr: User){
    console.log("User is ", usr.name)


    if(usr.age >= 16){
        console.log("User can drive")
    } else {
        console.log("User cannot drive")
    }
}

const me: User = {
    name: "Afshan Alam",
    age: 25
}

canDrive(me)