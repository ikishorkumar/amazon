// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaFZpK6cSogZI',
	authDomain: 'clone.firebaseapp.com',
	databaseURL: 'https://clone.firebaseio.com',
	projectId: 'clone',
	storageBucket: 'clone.appspot.com',
	messagingSenderId: '1034367947773',
	appId: '1:103f849ad663b3f83f94',
	measurementId: 'G-X2ZP',
// 	I have edited thse so you might lookout for your own config details of firebase
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
