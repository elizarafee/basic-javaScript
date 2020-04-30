// Closures is a function insude a function that relies on variables in the outside function to work

function ems(pixels){
    var base = 16;              // 16 is the base font size for most browsers

    function doMath(){
        return pixels/base;     // em = known px value / current context value
    }

    return doMath();
}

var smallSize = ems(12);

var mediumSize = ems(18);

var largeSize = ems(24);

var xLargeSize = ems(32);

console.log(smallSize);