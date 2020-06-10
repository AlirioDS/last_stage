import * as Firebase from 'firebase'

const DB_CONFIG = {
  apiKey: "AIzaSyDSZOpf6vmbNKjEUbhqpQk0f3TJI0_EJWg",
  authDomain: "last-f637e.firebaseapp.com",
  databaseURL: "https://last-f637e.firebaseio.com",
  projectId: "last-f637e",
  storageBucket: "last-f637e.appspot.com",
  messagingSenderId: "1075658762803",
  appId: "1:1075658762803:web:d6a4eb827e3711d0791146",
  measurementId: "G-99GWWB7NDD"
}

Firebase.initializeApp(DB_CONFIG)

export default Firebase
