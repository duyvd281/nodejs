//This function use to calculate Area and Peripheral of the Rectangle
function area(x,y){
    return(x*y);
}

function per(x,y){
    return((x+y)*2);
}

//input variable
x = 10;
y = 20;

//Show the result
console.log("Area=\n"+area(x,y));
console.log("Peripheral=\n",+per(x,y));