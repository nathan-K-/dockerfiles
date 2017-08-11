FROM haproxy:latest

RUN adduser haproxy && mkdir /var/lib/haproxy

EXPOSE 1883

CMD ["haproxy", "-f", "/usr/local/etc/haproxy/haproxy.cfg"] 