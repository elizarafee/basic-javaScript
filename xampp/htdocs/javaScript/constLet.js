// Constant variable can't be changed
const VARIABLE = 50;
console.log(VARIABLE);

// variable 'a' will be changed everywhere 
function letvar(){
    var a = 20;
    if(a){
        var a = 'changed';
        console.log(a);         // changed
    }
    console.log(a);             // changed
}
letvar();


// variable 'a' wont be changed
function varlet(){
    var a = 20;
    if(a){
        let a = 'changed';
        console.log(a);         // changed
    }
    console.log(a);             // 20
}
varlet();