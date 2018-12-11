# :blue_book: Ionic Vue Starter
[![NPM Version](https://img.shields.io/badge/npm-6.4.1-brightgreen.svg)](https://nodejs.org/) [![Node Version](https://img.shields.io/badge/node-v8.12.0-green.svg)](https://nodejs.org/) [![Ionic Version](https://img.shields.io/badge/ionic-4.0.0--beta-blue.svg)](https://beta.ionicframework.com/)

Ionic Vue Starter is a basic Vue CLI 3 (including Vuex & Vue Router) template with Ionic 4 and Capacitor integrated.

Ionic components be used in every Vue component. Take a look here for all the available components: https://beta.ionicframework.com/docs/components/

## :wrench: Getting started
### Requirements
- [Node](https://nodejs.org/) (Of course) v8.12.0 <
- [NPM](https://www.npmjs.com/) v6.4.1 <
- Ionic CLI v4.5.0 <
(`npm install -g ionic`)
- Vue CLI v3.0.5 <
(`npm install -g @vue/cli`)
#### (Optional) for Android Compiling
- [Android Studio](https://developer.android.com/studio/)
#### (Optional) for IOS Compiling
- [Xcode](https://developer.apple.com/xcode/) (OS X only)

### Download
Clone the repository
```sh
git clone https://github.com/W4G1/ionic-vue-starter
```
Or [download](https://github.com/W4G1/ionic-vue-starter/archive/master.zip) directly as .zip

### Installing dependencies
```sh
npm install
```

### Adding a platform for development
{platform} can be 'android', 'electron', 'ios', or 'web'.
```sh
npm run init {platform}
```

## :fire: Commands
| Command | Description |
| ------ | ------ |
| `npm run serve` | Starts development server with hot reloading |
| `npm run build` | Builds the web files and stores them in /dist |
| `npm run init {platform}` | Adds a new platform in the project in a folder called /{platform} |
| `npm run transfer {platform}` | Copies the /dist files to the platform folder |
| `npm run compile {platform}` | Builds, transfers and opens the native platform workspace |

## :package: Compiling
### Android
#### Requirements
- [Android Studio](https://developer.android.com/studio/).
#### Guide
1. Build the web files for production
```sh
npm run build
```
2. Copy the builded web files to the android folder
```sh
npm run transfer android
```
3. Load the project in Android Studio
```sh
npm run compile android
```
Android Studio should be automatically started and is now ready to build the project.

If you don't know how to build the project in Android Studio,
take a look [here](https://developer.android.com/studio/run/).

### IOS
#### Requirements
- [Xcode](https://developer.apple.com/xcode/) (OS X only).
#### Guide
Coming soon!
