import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAxTOVO1a5gXaprBnwvidROQldvj2-6X4s',
  authDomain: 'authentication-620fc.firebaseapp.com',
  databaseURL: 'https://authentication-620fc.firebaseio.com',
  projectId: 'authentication-620fc',
  storageBucket: 'authentication-620fc.appspot.com',
  messagingSenderId: '841434730296',
  appId: '1:841434730296:web:0dd42c9bc3363f97fb7bcd',
  measurementId: 'G-BB4YR4S2MN',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
