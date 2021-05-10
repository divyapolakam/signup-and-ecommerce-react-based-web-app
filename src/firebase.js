import firebase from 'firebase'

const config={
     
    apiKey: "AIzaSyA7v9Euhe4lRXVKbvQsSJzj_q0ljFrqAG0",
    authDomain: "signup-and-ecommerce-web-app.firebaseapp.com",
    projectId: "signup-and-ecommerce-web-app",
    storageBucket: "signup-and-ecommerce-web-app.appspot.com",
    messagingSenderId: "310415075664",
    appId: "1:310415075664:web:43da19ff6c36eaf934e455"
}
firebase.initializeApp(config);

export default firebase