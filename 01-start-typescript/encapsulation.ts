class Encapsulation {
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    get getName():string{
        return this.name;
    }

    set setName(name: string){
        this.name = name;
        }

}

const encap = new Encapsulation('Afshan Alam');
console.log(encap.getName);

