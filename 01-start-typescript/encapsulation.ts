class Encapsulation {
    private name: string = '';

    consctructor(name: string){
        this.name = name;
    }

    get getName():string{
        return this.name;
    }

    set setName(name: string){
        this.name = name;
        }

}

const encap = new Encapsulation();
console.log(encap.getName);

