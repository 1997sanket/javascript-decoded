// 1. Scope of a variable is either function level or global level.
var a = "Sanket";
if(a === "Sanket") {
    var b = "Kamble";
}
console.log(a + " " + b);



// 2. IIFE
(function() {
    var a = "Sanket";
    console.log(a + " Kamble");
})();



// 3. JS declares undeclared variable in global scope
var a = 10;
    function foo (){
        console.log("foo");
        function bar () {
            undeclaredVar = -100;
            console.log("bar");
        }
        bar();
    }
foo();
console.log("undeclaredVarible: " + undeclaredVar);


// 4. Variable hoisting
a = 10;
var a;
console.log(a);