class Car{
    static numberofCars = 0;

    constructor(model){
        this.model = model;
        Car.numberofCars+=1;
    }
    static startRace(){
        console.log("3....2...1...GO!");
    }
}

const car1 = new Car("Ferrari");
const car2 = new Car("BMW");
const car3 = new Car("Pagani");

console.log(Car.numberofCars);
Car.startRace();






