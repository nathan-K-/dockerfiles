# stack-docker
Little project to easily run the elastic stack.

## Quick Demo
Try `make up` to launch : Elasticsearch, Kibana, Logstash, Metricbeat, Filebeat, Packetbeat, and Heartbeat on a docker swarm.
By default, the version of the stack will be 5.5.0. You can easily change it in the makefile. (TAG=5.5.0)

Point a browser at `http://127.0.0.1:5601` to see the results.

Log in with `elastic` / `changeme` if needed.

## Disclaimer

This is a fork from [stack-docker](https://github.com/elastic/stack-docker)
