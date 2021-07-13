var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1');

client.on('connect',function(){
    console.log('Connected')
    client.publish('test','Duyvu test')
    client.end()
})