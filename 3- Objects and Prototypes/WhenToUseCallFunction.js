// When to use "call" function of JS

// Since even functions are objects in JS, it also has a property called "call".

// Aim of the below code is to allow Mechanic object to "inflateTires" in the passed Bicycle object.


function Bicycle(tirePressure, gears) {
    this.tirePressure = tirePressure;
    this.gears = gears;

    // Bicycles itself can inflate tires
    this.inflateTires = function () {
        this.tirePressure += 3;    // Inflating tires by 3 units 
    }
}


var bicycle1 = new Bicycle(28, 5);
var bicycle2 = new Bicycle(30, 5);


function Mechanic(name) {
    this.name = name;
}

var mechanic = new Mechanic("Sanket");
mechanic.inflateTires = bicycle1.inflateTires;
mechanic.inflateTires();    // Here, "this" will refer to the object "mike" is referring to

console.log("bicycle1 : " + bicycle1.tirePressure); // WOn't inflate bike1 tires

// Correct approach
mechanic.inflateTires.call(bicycle2);
console.log("bicycle2 : " + bicycle2.tirePressure);

