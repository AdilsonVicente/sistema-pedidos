import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCtFX6F0DGteK9aERjOPR1R06vgNbVlzKo',
  authDomain: 'reactzzaria-bdb62.firebaseapp.com',
  databaseURL: 'https://reactzzaria-bdb62.firebaseio.com',
  projectId: 'reactzzaria-bdb62',
  storageBucket: 'reactzzaria-bdb62.appspot.com',
  messagingSenderId: '524733941653',
  appId: '1:524733941653:web:6f45fa0f1754a918cbd89c',
  measurementId: 'G-FGZG29H7LM'
}

firebase.initializeApp(firebaseConfig)

export default firebase
