//Add API
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1')

var Event = require('events')
const { exec } = require('child_process')

//Add 2 event to handle the message
var Emiter1 = new Event.EventEmitter()
var Emiter2 = new Event.EventEmitter()

//Connect to broker and subscribe
client.on('connect',function(){
    client.subscribe('test');
})

//Get message and handle
client.on('message',function(topic,payload){
    console.log(payload.toString())
    if(payload == 'Duyvu test') Emiter1.emit('1');
    else Emiter2.emit('1');
    if(payload == 'stop mosquitto') exec('service mosquitto stop');
    if(payload == 'close') client.end();
})

//Set events handle function
Emiter1.addListener('1',function(){
    console.log('emit1 is running')
})

Emiter2.addListener('1', function(){
    console.log('emit2 is running')
    })

client.on('disconnect',function(){
    console('Disconnect...')
    client.end();
})