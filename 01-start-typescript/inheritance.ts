class Item {
    id: string = '';
    description: string = '';
    price: number = 0;

    getId(): string {
        return this.id;
    }
}

class Bicycle extends Item {
    wheelCount: number = 0;

    getWheelCount(): number {
        return this.wheelCount;
    }
}

const bicycle = new Bicycle();
bicycle.id = 'B001';
bicycle.description = 'Mountain Bike';
bicycle.price = 500;
bicycle.wheelCount = 2;

console.log('Bicycle ID:', bicycle.getId());
console.log('Bicycle Description:', bicycle.description);
console.log('Bicycle Price:', bicycle.price);
console.log('Bicycle Wheel Count:', bicycle.getWheelCount());