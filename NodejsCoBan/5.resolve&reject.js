//Resolve Promise
var resolve = Promise.resolve(1)
resolve.then(msg => console.log (msg),err => console.log (err));
//Reject Promise
var reject = Promise.reject(0)
reject.then(msg => console.log(msg), err => console.log ( err));