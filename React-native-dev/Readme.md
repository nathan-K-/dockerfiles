# React native docker

## Intro
This image is here to provide a functional and easy to install android development setup for react-native.

## How to use it

First, build the container :

```$make build```


Then, modify the projects volume in the makefile and run it : 

```$make run```


And finally, use a bash :

```$make bash```


Then, go to your projects directory (cd /opt/android/projects/ by default, depending on your volumes), and

```$react-native init NAME``` //to start a project

```$react-native run-android``` //To run it on a Android device connected with use

```$react-native whatever```


## Disclaimer

This is a fork (and an update) of [this image](https://github.com/edy/docker-react-native)