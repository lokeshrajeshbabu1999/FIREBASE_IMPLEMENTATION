// firebaseConfig.js
import firebase from '@react-native-firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyB785xedX1x5omt1kXK7hREN2ackVl1--I",
    // authDomain: "your-auth-domain",
    projectId: "my-first-firebase-project-09",
    storageBucket: "my-first-firebase-project-09.appspot.com",
    messagingSenderId: "1080160627915",
    appId: "1:1080160627915:android:0d0effdb93fe8f20417f4e",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
