// How to mimic Java's Encapsulation concept

function createPerson () {

    // We take the fields on function level, so that it is not available outside function
    var name = "Sanket";    

    var person = {
        // getter
        "getName": function () {
            return name;
        },
        // setter
        "setName": function(personName) {
            name = personName;
        }
    };

    return person;
}


var person = createPerson("Sanket");
// console.log(person.name); -- Now we cannot directly access name variable.
console.log(person.getName());