//Set var
var a = 0;

//Async
interval = setInterval(function(){
    a++;
    console.log(a,'\n');
},500);

//Sync
console.log("Running...\n");

//Async
setTimeout(function(){
    clearInterval(interval)
},10001);

