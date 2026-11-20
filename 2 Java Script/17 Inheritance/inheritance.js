class Cat{
    constructor(name){
        this.name = name;
        this.leg = 4;
    }

    move(){
        console.log(`The cat is moving on ${this.leg} legs`);
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

let chinti = new Cat("Chinti");

chinti.move();
chinti.speak();

class Lion extends Cat{
    constructor(name,colour){
        super(name);
        this.colour = colour;
    }
    
    eat(){
        console.log(`${this.name} eats meat`);
    }

    speak(){
        console.log(`${this.name} Roars`);
    }
}

let Simba = new Lion('Simba','Yellow');
Simba.move();
Simba.speak();
Simba.eat();

// chinti.eat(); (error)