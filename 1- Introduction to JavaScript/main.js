// 1. Type Coercion

var a = 10;
var b = "10";

// as b is a string, JS converts number 10 to string 10 and then concatenates
console.log(a + b); 

// converts a to string and then compares
if(a == b) {
    console.log("a is equal to b");
}

// checks type as well
if(a === b) {
    console.log("a is equal to b");
} else {
    console.log("a is not equal to b");
}




// 2. Objects 

// Literal object (no need of a class)
var person = {
    "name": "Sanket",
    "age": 25,
    "address": {
        "city": "Mumbai",
        "state": "Maharashtra"
    }
}

// accessing object properties
console.log(person.age);
console.log(person.address.city);
console.log(person["name"]);


var obj = {
    "1": "One"
}

// console.log(obj.1);      won't work
console.log(obj["1"]);

// Can add properties
person.gender = "male";
console.log(person);

// Can delete properties
delete person.gender;
console.log(person);





// 3. Array

var numbers = [1, 2, 3];
console.log(numbers[0]);
console.log("length of array : " + numbers.length);
console.log(numbers[5]);
console.log(numbers[100] = 100);
console.log("array length after adding 100 to 100th index: " + numbers.length);

// proof that arrays are objects
numbers.foo = "foo";
console.log(numbers["0"]);



// Functions

// Normal function
function greet() {
    console.log("Hello!");
}

greet();


function add(a ,b) {
    console.log(a + b);
}

add(1, 2, 3);

function varArgsAdd() {
    var i, sum = 0;

    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    console.log(sum);
}

varArgsAdd(1, 2, 3, 4, 5);


// Functions as value
// Below is the anonymous function.
var foo = function () {
    console.log("foo");
}

foo();


// Functions in object
var person2 = {
    "firstName": "Sanket",
    "lastName": "Kamble",
    "age": 25,
    "address": {
        "city": "Mumbai",
        "state": "Maharashtra"
    },

    "getFullName": function() {
        // return person2.firstName + " " + person2.lastName;
        // Problem with the above approach is person2 can be reassigned to a different value. 
        return this.firstName + " " + this.lastName;
    }
}

console.log(person2.getFullName());


// functional programming (forEach is a method given to us in the array, like wise there are various methods)
numbers.forEach(item => console.log(item));