# Mosca swarm

[Mosca](https://github.com/mcollina/mosca) is a MQTT Broker based on NodeJS and on a database. (Redis here)
It is very easy to scale.

## How to use this dockerfile
First, be sure that every nodes has an access to the needed images (redis, and the custom mosca-mqtt).
You can ```make build``` on every node, or push it to a registry.

Then, you only have to do ```make up``` to start it, and ```make down``` to stop it.
You can scale the broker with ```docker service scale mosca=X```.

The docker routing mesh will make the work of a load balancer, but you can use the HAProxy in this repo if you want to run a POC, on a single box for example.

(you will have to change this line :
```server mosca_1 mosca:1883 check``` of the haproxy.cfg to your own parameters)
