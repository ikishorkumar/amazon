// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyBAyAICsPgorF8nSeSHwnleFZpK6cSogZI',
	authDomain: 'clone-11033.firebaseapp.com',
	databaseURL: 'https://clone-11033.firebaseio.com',
	projectId: 'clone-11033',
	storageBucket: 'clone-11033.appspot.com',
	messagingSenderId: '1034367947773',
	appId: '1:1034367947773:web:3b1d9f849ad663b3f83f94',
	measurementId: 'G-X2C5MN8KZP',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
