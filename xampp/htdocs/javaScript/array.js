// Array of same and multi Datatypes 
var colors = ['red', 'green', 'yellow'];
var multiDataArray = [-20 , 'Rafee', 'Tareque', 10, 'Eliza Rafee', 10.5, -78, -10];
console.log(colors, multiDataArray);

// changing value of any index
multiDataArray[3] = 'Hasan';
console.log(multiDataArray);
 
// ****** Properties & methods of array ******

// Checking length
console.log(multiDataArray.length);

// Deleting 1st value
console.log('deleted : ' + multiDataArray.shift());

// Inserting data at starting
multiDataArray.unshift('Hasan Mohammad Tareque')
console.log(multiDataArray);

// Deleting last value
console.log(multiDataArray.pop());

// Inserting data at the last
multiDataArray.push('Eliza Ahmed Rafee');
console.log(multiDataArray)

// Deleting from inner list
// splice(starting index of deleting, number of deleting data from statring)
console.log(multiDataArray.splice(5, 2)); 

// Creating copy of an array
var newarray = multiDataArray.slice();
console.log(newarray);
console.log('new array : ' + newarray);

// Tracing index for specific search
console.log(multiDataArray.indexOf('Tareque',1));

// Getting items by ', or anythings else' separated
console.log(multiDataArray.join());      // comma separated by default
console.log(multiDataArray.join(' ,,, '));

// For more check MDN Documentation