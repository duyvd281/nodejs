//Use 2 promise to check Square
var check = (a , b) => {
    return new Promise((resolve,reject) => {
        if( a < 0 || b < 0 ) reject(" invalid Value");
        else return resolve(1)
    })
}
var checkhinh = ( a, b) => {
    return new Promise((resolve,reject) => {
        if( a == b ) resolve("Hinh vuong");
        else reject("Khong phai hinh vuong");
    })
}
var a = 1
var b = 2
check(a,b)
    .then(()=>checkhinh(a, b))
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))