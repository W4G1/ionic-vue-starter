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

### Running the development server
This is the Vue dev server, and features hot reloading.
```sh
npm run serve
```

## :fire: Commands
| Command | Description |
| ------ | ------ |
| `npm run serve` | Starts development server with hot reloading. |
| `npm run build {platform}` | Builds the project and opens the native platform workspace. |
| `npm run init {platform}` | Adds a new platform to the project with its own folder (e.g /android or /ios). |
| `npm run sync {platform}` | Synchronizes the web assets with a specific project folder, or all initialized platforms if {platform} is left empty. |

## :package: Building
### Android
#### Requirements
- [Android Studio](https://developer.android.com/studio/).
#### Guide
Run this command to sync the web assets with the android project folder, and open the project in Android Studio.
```sh
npm run build android
```
Android Studio should now be started. If not, you either didn't install it, or it is installed at a custom location.

If that is the case, you can specify the Android Studio path in `capacitor.config.json`.

For Windows:
```json
{
    ...
    "windowsAndroidStudioPath": "C:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe",
}
```
Or Linux:
```json
{
    ...
    "linuxAndroidStudioPath": "/usr/local/android-studio/bin/studio.sh"
}
```

The project should now be loaded in Android Studio, and is ready for building. If you don't know how to build a project in Android Studio, take a look [here](https://developer.android.com/studio/run/).

### IOS
#### Requirements
- [Xcode](https://developer.apple.com/xcode/) (OS X only).
#### Guide
Coming soon!

## Bugs & Questions
For any bugs or questions, feel free to create an issue [here](https://github.com/W4G1/ionic-vue-starter/issues).
