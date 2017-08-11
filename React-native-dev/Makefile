build:
	docker build -t react-native .

run:
	docker run -p 8081:8081 -itd --privileged \
	-v /dev/bus/usb:/dev/bus/usb \
	-v /home/USER/Android/Projets/:/opt/android/projects \
 	--name react-native react-native

bash:
	docker exec -it react-native /bin/bash 