# Crick Click frontend application

This is frotnend part of the application which is under development using vue.js and related technologies. Here we use vuetify as a main component library. use following guidelines to individually run a frontend as a seperate project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```javaScript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS7tvtGUWthPyuVqLVWIGZFsvAG4CabNk",
  authDomain: "crick-click.firebaseapp.com",
  projectId: "crick-click",
  storageBucket: "crick-click.appspot.com",
  messagingSenderId: "15672017340",
  appId: "1:15672017340:web:749891db2819660bb52bb9",
  measurementId: "G-4XPC9J42HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);```