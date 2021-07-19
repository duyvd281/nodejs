var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1");
client.on('connect',function(){
    let subcrible = new Promise((resolve,reject) => {
        client.subscribe('2st',function(err){
        if(!err) return reject("Khong co topic");
        else return resolve("Dang Subscribe");
    })})
    subcrible.then(resolve => {
        console.log(resolve)
    },
    reject => console.log(reject));
})