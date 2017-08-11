var ascii = "" +
"       +++.+++:   ,+++    +++;   '+++    +++. \n" +
"      ++.+++.++   ++.++  ++,'+  `+',++  ++,++ \n" +
"      +`  +,  +: .+  .+  +;  +; '+  '+  +`  +` \n" +
"      +`  +.  +: ,+  `+  ++  +; '+  ;+  +   +. \n" +
"      +`  +.  +: ,+  `+   +'    '+      +   +. \n" +
"      +`  +.  +: ,+  `+   :+.   '+      +++++. \n" +
"      +`  +.  +: ,+  `+    ++   '+      +++++. \n" +
"      +`  +.  +: ,+  `+     ++  '+      +   +. \n" +
"      +`  +.  +: ,+  `+  +:  +: '+  ;+  +   +. \n" +
"      +`  +.  +: .+  .+  +;  +; '+  '+  +   +. \n" +
"      +`  +.  +:  ++;++  ++'++   ++'+'  +   +. \n" +
"      +`  +.  +:   +++    +++.   ,++'   +   +. ";

console.log(ascii);

//var server = require('./lib/server')
 // , debug  = require('debug')('lelylan');
var mosca = require('mosca');

var ascoltatore = {
      type: 'redis',
      redis: require('redis'),
      db: 12,
      port: 6379,
      host: 'redis' }

var settings = {
  port: process.env.NODE_PORT || 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Redis,
    db: 12,
    port: 6379,
    host: 'redis'
  }};

var app = new mosca.Server(settings);
console.log("Mosca started");

app.on('published', function(packet, client) {
  console.log('Event: ', packet.payload.toString(), 'on topic', packet.topic);
});

app.on('ready', function() {
  console.log('MQTT Server listening on port', process.env.NODE_PORT)
});
