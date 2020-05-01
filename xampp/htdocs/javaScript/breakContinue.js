for(var i =0; i<30; i++){
    if(i%2 != 0){
        console.log('Odd number : '+ i);
        continue;
    }
    console.log('Even number : '+ i);
    if(i == 28){
        console.log('Break statement');
        break;
    }
}