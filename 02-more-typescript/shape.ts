class Person {
    name: string = "";
}

const jill: { name: string } = {
    name: "Jill"
};

const person: Person = jill; // This is valid because the structure matches

console.log(person);