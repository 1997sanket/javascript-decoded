
// Needs to be declared before using, because like anonymous functions they are not hoisted.
var a = () => {
    console.log("Arrow function");
}
a();

// Arrow functions work fine in constructor functions
function Employee(name, age) {
    this.name = name;
    this.age = age
    
    this.getName = function () {
        return this.name;
    }

    this.getAge = () => {
        return this.age;
    }
}

var emp = new Employee("Sanket", 25);
console.log(emp.getName());
console.log(emp.getAge());


// Arrow function as Object literal function doesn't work because in this case "this" is window object of browser
var emp2 = {};
emp2.name = "Sanket";
emp2.displayName = () => {
    console.log(this === window); // true
    console.log(this.name);
}

emp2.displayName();



// Read more --> https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
