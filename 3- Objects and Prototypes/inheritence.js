// Creating Employee constructor function
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

// Adding getName() and getSalary() functions to the Employee prototype so that it is shared by all its objects
Employee.prototype.getName = function() {
    return this.name;   // Here "this" refers to the caller object.
}

Employee.prototype.getSalary = function() {
    return this.salary;
}


// Creating Manager constructor function
function Manager(name, salary, managingDept) {
    this.name = name;
    this.salary = salary;
    this.managingDept = managingDept;
}


// Adding getManagingDept() to the Manager's prototype so that it's shared by all of its objects
Manager.prototype.getManagingDept = function () {
    return this.managingDept;
}


// Now according to Inheritance, a Manager is also an Employee, and thus we want to used the getSalary and getName method on it
// Hence we can point Manager's prototype object to Employee prototype object.

Manager.prototype.__proto__ = Employee.prototype;


var emp = new Employee("Jim Halpert", "50k$");
var mgr = new Manager("Michael Scott", "60k$", "Sales");

console.log("Employee name: " + emp.getName());
console.log("Manager name: " + mgr.getName());  // Possible due to Inheritance.
console.log("Manager's managing department: " + mgr.getManagingDept()); 



// From the above code we can see that, it only makes sense to inherit functions() from the parent prototype, 
// not the object instance members, because remember we are inheriting from OBJECTS/PROTOTYPES and not CLASSES.