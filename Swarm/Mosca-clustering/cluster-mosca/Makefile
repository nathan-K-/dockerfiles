REDIS=redis:4.0.1-alpine
HAPROXY=haproxy-mqtt

pull:
	docker pull $(HAPROXY)
	docker pull $(REDIS)

build:
	docker build -t mosca-mqtt ./mosca/
	docker build -t $(HAPROXY) ./haproxy/

# -itd can be replace with -d if no debug is needed
run:
	docker stack deploy -c docker-compose.yml mqttstack

clean:
	docker stack rm mqttstack 

all: clean build run
