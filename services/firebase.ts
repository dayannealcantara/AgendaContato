import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBQE-pZBoOqoLrBV--daplsMtnU2C7L7FQ",
    authDomain: "agendaaulanext-59725.firebaseapp.com",
    projectId: "agendaaulanext-59725",
    storageBucket: "agendaaulanext-59725.appspot.com",
    messagingSenderId: "942068750024",
    appId: "1:942068750024:web:96f8495c0960ac4fccf7fd"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}else {
    firebase.app()
}
const database = firebase.database()

export{database, firebase}