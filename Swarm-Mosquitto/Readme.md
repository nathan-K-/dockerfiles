# Mosquitto cluster

This is a POC of the architecture described in [this thread](https://stackoverflow.com/a/36377681/8132173).

Be sure that every node has the needed images (through a depository, or by running  ```make build``` on each node)
You will find a specific config file in ```mosquittoConfX```, this is made for 3 nodes (A, B, and C)

## How to use it

With every config file / images ready, you can do:
```make up``` to start it, and
```make down``` to stop it
