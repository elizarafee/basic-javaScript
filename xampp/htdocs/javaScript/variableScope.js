// defining variable : Locally, globally. Global variables can be accessed from anywhere but local variables can only be accessed locally

// Global variable :
var a = 16;

function print(){
    // Local variable of Print function
    var b = 20; 
    console.log(a);
}
print();

console.log(b);