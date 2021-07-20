var a = -1;
var check = new Promise((resolve,reject) => {
    if (a>0) resolve("Calculating...\n");
    else reject(" Invalid Variable\n");
})
check.then(msg => { console.log(msg)},err => console.log(err));




//Function return a Promise to setTimeout 
function delay(ms){
    return new Promise((resolve,reject)=> {
        if( typeof ms !== 'number' || ms < 0) reject("invalid value");
        else setTimeout(function()
        {resolve(ms)},
        ms)
    })    
}

delay(5000).then((msg)=> console.log(msg),(rej)=> console.log(rej))

