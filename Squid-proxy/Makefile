up:	
	docker run --name squid -d \
	--restart=always \
	--publish 3128:3128 \
	--volume ./squid.conf:/etc/squid3/squid.conf \
	sameersbn/squid

stop:
	docker stop squid

start:
	docker start squid

down:
	docker rm -f squid