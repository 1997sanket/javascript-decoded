"use strict";

class Person {
    constructor(name, age) {
        this.name = name;   // this becomes private property, because it's getter and setters are written
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    getAge() {
        return this.age;
    }
}


class Employee extends Person {
    constructor(name, age, dept) {
        super(name, age);
        this.dept = dept;
    }

    displayInfo() {
        console.log(this.name + " " + this.age + " " + this.dept);
    }
}


const emp = new Employee("Jim Halpert", 28, "Sales");
console.log(emp.getAge());
console.log(emp.name);
console.log(emp.displayInfo());
