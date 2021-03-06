# Pocket Converter

An open source React Native app published at Google Play Store and Apple App Store.

## Check it on stores

[![alt text](./app-store.png "Download on App Store")](https://apps.apple.com/app/pocket-converter/id1504100849?ls=1) [![alt text](./play-store.png "Download on Play Store")](https://play.google.com/store/apps/details?id=com.totipocketconverter)

## This project is:
- SVG-ready
- Using React Hooks
- Using React Context
- Using Async Storage
- Using i18n Internationalization
- Ready to publish on both Google and Apple store

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

I highly recommend using the same steps as a new React Native application from docs.

You can check the steps [here](https://reactnative.dev/docs/getting-started).

Follow the steps until the **"Creating a new application"**.

Then, clone this repository to you computer

```
$ git clone git@github.com:guilherme-toti/pocket-converter.git
```

Access it and install dependencies

```
$ cd pocket-converter
$ npm install
```

Copy `gradle.properties` file

```
Go to ./android and:
$ cp gradle.properties.default gradle.properties
```

## If you already have a `.keystore` file, follow this next step, otherwise skip it.

Move your keystore to the folder `./android/app`

```
$ mv your-keystore.keystore /this/project/folder/android/app/
```

Make changes on your `gradle.properties` file based on your .keystore file

**_(If you have NO IDEA about what is a .keystore file or don't want to release "production" version right now, dont change the values)_**

Open `./android/gradle.properties` on your prefered editor and change the values of:

```
MYAPP_UPLOAD_STORE_FILE=your.keystore
MYAPP_UPLOAD_KEY_ALIAS=your-alias
MYAPP_UPLOAD_STORE_PASSWORD=your-password
MYAPP_UPLOAD_KEY_PASSWORD=your-password
```

### Run the app:

```
Android
$ npx react-native run-android

iOS
$ npx react-native run-ios
```


End with an example of getting some data out of the system or using it for a little demo

## Running the tests

To run tests simply run:

```
$ npm run test
```

## Deployment

Steps to publish it to app stores

### Android

Generate your `.keystore` file, this is the private signing key.

```
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Move the key file to `./android/app` folder:

```
$ mv my-upload-key.keystore android/app
```

Make changes on `gadle.properties` based on your `.keystore` file

Open `./android/gradle.properties` on your prefered editor and change the values of:

```
MYAPP_UPLOAD_STORE_FILE=your.keystore
MYAPP_UPLOAD_KEY_ALIAS=your-alias
MYAPP_UPLOAD_STORE_PASSWORD=your-password
MYAPP_UPLOAD_KEY_PASSWORD=your-password
```

Generate the release APK

```
$ cd android
$ ./gradlew bundleRelease
```

The generated AAB can be found under `android/app/build/outputs/bundle/release/app.aab`, and is ready to be uploaded to Google Play.

**You can read more about this step here: [Publishing to Google Play Store | React Native docs](https://reactnative.dev/docs/signed-apk-android.html).**

### iOS

Follow [this guide](https://readybytes.in/blog/how-to-deploy-a-react-native-ios-app-on-the-app-store).
This is the way I published it!

## Author

**[Guilherme Toti](http://www.guilhermetoti.com)**
