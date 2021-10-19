import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAZUNk4pTcYOS__Cj_qvubJRCYMcxujcAo',
  authDomain: 'chuck-s-trucks.firebaseapp.com',
  projectId: 'chuck-s-trucks',
  storageBucket: 'chuck-s-trucks.appspot.com',
  messagingSenderId: '32402341031',
  appId: '1:32402341031:web:5de8cd56643b0dace16f82',
  measurementId: 'G-QZ6B71CVGZ',
});

const db = firebaseApp.firestore();

export default db;
