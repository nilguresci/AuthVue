import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyARdTDyFp7Z-_BfrxbCw7vyqmUao8uzPjQ",
    authDomain: "vuejs-3e080.firebaseapp.com",
    databaseURL: "https://vuejs-3e080.firebaseio.com",
    projectId: "vuejs-3e080",
    storageBucket: "vuejs-3e080.appspot.com",
    messagingSenderId: "216421246210",
    appId: "1:216421246210:web:87b669d8c3aca342358e1b"
};
const app = firebase.initializeApp(firebaseConfig);

export default {
    initialize() {
        return app;
    },
    kimlik() {
        return app.auth();
    }
}