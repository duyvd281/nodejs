//This function use to calculate Area and Peripheral of the Rectangle
function area(x,y){
    if(check(x,y))
    return(x*y);
    else return 0;
}

function per(x,y){
    if(check(x,y))
    return((x+y)*2);
    else return 0;
}

function check(x,y){
    if (x<0 || y<0) {
        console.log("Invalid Variable");
        return 0;
    }
    else return 1;
}
//input variable
x = -10;
y = 20;

//Show the result
console.log("Area=\n"+area(x,y));
console.log("Peripheral=\n",+per(x,y));