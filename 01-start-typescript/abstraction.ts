interface User{
    // variables
    name: string;
    age: number;

    // methods
    canDrive(): any;
}

class Person implements User {

    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    } 

    canDrive() {
        console.log("User is => ", this.name);
        
        if(this.age >= 18){
            console.log(this.name, "can drive") 
        } else {
            console.log(this.name, "cannot drive") 
        }
    }
}

const Afshan:User = new Person('Afshan Alam', 25)
Afshan.canDrive();