// conditional statement : if, else

var a = 5, b = 5, c = 15, d = 20, e = 25;
if(a>b){
    console.log('a is greater than b');
} if (b>a) {
    console.log('b is grater than a');
} else if (a==b){
    console.log('a is equal to b');
} else {
    console.log('nothing');
}

// Advanced condition : && / ||
if(c>d && c>d){
    console.log(c,d);
} else if (d<e || d>e){
    console.log(d,e);
}