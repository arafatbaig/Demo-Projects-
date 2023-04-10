class Student{
    constructor(name,age,gpa){
        this.name = name ;
        this.age = age ;
        this.gpa = gpa ;

    }
    study(){
        console.log(`${this.name} is working hard `);
    }
}

const student1 = new Student("Harry Potter ", 25 ,4.7);
const student2 =  new Student("Leon Kenddey ", 33 , 3.3);
const student3 = new Student("Izuka Midoriya",20,1.2);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();







