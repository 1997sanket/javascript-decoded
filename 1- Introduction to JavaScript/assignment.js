var person = {
    "firstName": "Sanket",
    "lastName": "Kamble",
    "age": 25,
    "address": {
        "city": "Mumbai",
        "state": "Maharashtra"
    },

    "getFullName": function() {
        return this.firstName + " " + this.lastName;
    },

    "isCurrentCity" : function(city) {
        if(this.address.city === city) return true;

        else return false;
    }
}

console.log(person.isCurrentCity("Mumbai"));


