# CarWashApp

# Setting up NativeScript on OS X and running the app in the iOS emulator

1. Homebrew must be installed in the terminal in order to run certain commands. Open a terminal window, and run:

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install Node.js v6.9.1 using this terminal command:

brew install homebrew/versions/node6-lts

3. Install Xcode from the Mac App Store

4. Download the Command Line Tools for Xcode from this website:

https://developer.apple.com/downloads/index.action

5. Install xcodeproj ruby gem using this terminal command:

sudo gem install xcodeproj

6. Install CocoaPods using this terminal command:

sudo gem install cocoapods

7. Install the Java SE Development Kit 8u111 from this website:

http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

The even-numbered builds are only intended for projects that experience errors with the main odd-numbered builds.

8. Add the JAVA_HOME system environment variable using this terminal command:

export JAVA_HOME=$(/usr/libexec/java_home)

9. Install the NativeScript CLI by running the following terminal command, then restarting the command prompt. Remember to re-install Homebrew in each new terminal command.

npm i -g nativescript

10. Check if everything is working by running this terminal command:

tns doctor

# Optional: Installing the Android development environment

