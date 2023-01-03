// 1. Closure explained

/* var i;

    var print = function (){
        console.log(i);
    };

    for (let i = 1; i <= 10; i++) {
        setTimeout(print, 2000);
    }

*/

/* 
    Output will print "10" 10 times.

    Why ?
        -For loop will be over, and print function will be given to setTimeout 10 times.
        -Now after 2 seconds, from the queue something will execute the print function 1 by 1.
        -And by the time 2 seconds are over, value of i is 10.
    
    But but but...
        The code which is executing the print function after 2 seconds,
        how does it KNOW ABOUT i ???
        Because i is in our code and our JS file. 
        How is other code accessing this variable ?
    
        Ans is "Closures"
            -Whenever we are sending the print function, a "POINTER"
             is created which points to our variable.
            -So for every time the function is sent, a new pointer variable points to
                our variable.
            -Remember this is a pointer, not a copy.
*/


// How to solve the above code so that 1 to 10 is printed after 2 seconds
var i;


for (i = 1; i <= 10; i++) {
    
    // IIFE
    (function(currentI){
        setTimeout(function (){
            console.log(currentI);
        }, 2000);
    })(i);
}


/*
    For the above code, "currentI" is in the IFFE scope.
    The callback function of setTimeout can access it and thus a pointer is 
    made which points to currentI.

    Hence, this callback function, even though executed somewhere else,
    can still access "currentI" variable which is in our code in the IIFE function.
*/


