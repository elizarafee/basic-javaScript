// Script is a list os steps to be completed in a specific order. In JS there are three types of function


// Regular function:
function mul(){
    return a*b;
}
var a = 10, b = 20;
console.log(mul());


// Anonymouus functions:
var add = function(c, d){
    return c+d;
} 
console.log(add(20, 30));


// Immediately invoked function:
var sub = (function(e, f){
    return e-f;
})(20, 10)
console.log(sub);