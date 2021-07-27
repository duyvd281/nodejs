var mqtt = require('mqtt')
var Client = mqtt.connect("mqtt://127.0.0.1")
async function pub(msg){
    try
    {
    let connect = await Client.on('connect',function()
    {
        console.log("connected")
    })
    let pub = await Client.publish('test',msg)
    }
    catch(err){console.log(err)}
}
pub('a')