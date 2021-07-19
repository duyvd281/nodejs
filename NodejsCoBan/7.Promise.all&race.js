let delay1 = a => {
    return new Promise((resolve,reject) => {
        setTimeout(resolve(a),1500);
    })
}

let delay2 = b => {
    return new Promise((resolve,reject) => {
        setTimeout(resolve(b),1400)
    })
}
Promise.all([delay1(1),delay2(2)])
    .then((msg)=> console.log(msg))
Promise.race([delay1(1),delay2(2)])
    .then((msg)=> console.log(msg))