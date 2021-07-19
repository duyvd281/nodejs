//Add API
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//Connect to local broker   
client.on('connect',function(){
    console.log('Connected')
    //Get stdin and publish local broker with topic: test
    readline.question('Type your message \n', message => {
        client.publish('test',message);
        client.end();
        readline.close();
      });
})