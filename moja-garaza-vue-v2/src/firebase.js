import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCx1xAtD9QabTlai-EohO3p6yTPpB6QgFA",
    authDomain: "mojagaraza-bf794.firebaseapp.com",
    databaseURL: "https://mojagaraza-bf794.firebaseio.com",
    projectId: "mojagaraza-bf794",
    storageBucket: "mojagaraza-bf794.appspot.com",
    messagingSenderId: "1041656713469",
    appId: "1:1041656713469:web:caa76738752e9e5ac22e94",
    measurementId: "G-FBCH16PFEK"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
