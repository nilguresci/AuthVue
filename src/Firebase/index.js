import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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