PROJECT-DIR=YourProjectDir # name of your project dir in /home/$USER/Android/Projets/

build:
	docker build -t react-native .

run:
	docker run -p 8081:8081 -itd --privileged \
	-v /dev/bus/usb:/dev/bus/usb \
	-v /home/$USER/Android/Projets/:/opt/android/projects \
 	--name react-native react-native

bash:
	docker exec -it react-native /bin/bash 


prepare: # run the JS dev server, must be done once
	docker exec -d react-native bash -c 'cd /opt/android/projects/$(PROJECT-DIR) && react-native start'


push: # push your code to the device (be sure adb recognize it before -> bash, and 'adb devices')
	docker exec -t react-native bash -c 'cd /opt/android/projects/$(PROJECT-DIR) && react-native run-android'
