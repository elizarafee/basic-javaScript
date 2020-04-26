// Arithmetic operators: +, -, *, /, +=, -=, *=, /=

var a = 5, b = 10, c = 15, d = 20, e = 25;

console.log(a*=b);

// Unary operators: ++, --
//  d = 20, e = 25
console.log(++e);   //26
console.log(e);     //26
console.log(d++);   //20
console.log(d)      //21

// Ternary Operator : condition? true: false
100<23 ? console.log(true) : console.log(false);