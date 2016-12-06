# CarWashApp

# Setting up NativeScript on OS X and running the app in the iOS emulator

1. Homebrew must be installed in the terminal in order to run certain commands. Open a terminal window, and run:

  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install Node.js v6.9.1 using this terminal command:

  brew install homebrew/versions/node6-lts

3. Install the dependencies required for iOS and Android development using this terminal command:

  ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"

4. Install Xcode from the Mac App Store

5. Download the Command Line Tools for Xcode from this website:

  https://developer.apple.com/downloads/index.action

6. Install xcodeproj ruby gem using this terminal command:

  sudo gem install xcodeproj

7. Install CocoaPods using this terminal command:

  sudo gem install cocoapods

8. Install the Java SE Development Kit 8u111 from this website:

  http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

  The even-numbered builds are only intended for projects that experience errors with the main odd-numbered builds.

9. Add the JAVA_HOME system environment variable using this terminal command:

  export JAVA_HOME=$(/usr/libexec/java_home)

10. Install the NativeScript CLI by running the following terminal command, then restarting the command prompt. Remember to re-install Homebrew in each new terminal command.

  npm i -g nativescript

11. Check if everything is working by running this terminal command:

  tns doctor

# Optional: Installing the Android development environment

1. Install the Android SDK by running this terminal command:

  brew install android-sdk

2. Set the ANDROID_HOME system environment variable by running this terminal command:

  export ANDROID_HOME=/usr/local/opt/android-sdk

3. Select the packages for Android 22 SDK, Android SDK Build-tools 23.0.3 or later, and Local Maven repository for Support Libraries by running this terminal command:

  android update sdk --filter tools,platform-tools,android-23,build-tools-23.0.3,extra-android-m2repository,extra-google-m2repository,extra-android-support --all --no-ui

4. Create a Google Nexus 5 device with the default settings.

# Optional: Installing the Genymotion Android virtual machine

1. Download VirtualBox from this link:

  https://www.virtualbox.org/wiki/Downloads

2. Download and install Genymotion from this link, after setting up an account:

  https://www.genymotion.com/#!/download

3. Add Genymotion and Genymotion Shell to the PATH system variable by running this terminal command:

  PATH=$PATH:/Applications/Genymotion\ Shell.app/Contents/MacOS/:/Applications/Genymotion.app/Contents/MacOS/

4. In the settings tab in Genymotion, go to ADB and change the "ADB tool connection" settings to "custom". Enter the path of the Android SDK:

  /usr/local/opt/android-sdk
