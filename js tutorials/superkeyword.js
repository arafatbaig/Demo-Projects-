class Animal{
    constructor(name,age){
        this.name = name; 
        this.age = age ;
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimspeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit",1,400);
const fish = new Fish("Fish",2,60);
const hawk = new Hawk("Hawk",3,5000);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);











