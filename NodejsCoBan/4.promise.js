var a = -1;
var check = new Promise((resolve,reject) => {
    if (a>0) resolve("Calculating...\n");
    else reject(" Invalid Variable\n");
})
check.then(msg => { console.log(msg)},err => console.log(err));

