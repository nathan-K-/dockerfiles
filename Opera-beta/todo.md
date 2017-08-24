# TODO : Opera-beta (or any browser) in docker

## Goal

Have a running, out-of-the-box, opera beta (with GUI, of course) running in one command (aliases !), and with automatic installation

## Technos that can be used
- Python 2 or 3 (sys, subprocess, json) -> ```subprocess.call('ssh nathan@127.0.0.1', shell=True)```
- (maybe Perl, to test it ?)
- Docker, to run Opera
- ```ssh -X```  -> to share X server without mounting the X socket in the container, -> add my ssh keys in the build / after, or ssh-copy-id (passwords = bad)
- x2go instead of ```ssh -X``` maybe (see mTelePlayer/Telekinesis for videos, Youtube, etc...)

## Potential issues 
- Persistent storage ? (history, bookmarks, etc... )
- Hardware acceleration in a container ? (OpenGL, if still needed with HTML5)
- Security ? (why I choose ssh -X instead of mounting the X socket)
- More to come ...

