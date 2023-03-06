// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs8NPNnho4BxQ15PAYTwswYWeUs8FmJpU",
    databaseURL: "https://form-30391-default-rtdb.asia-southeast1.firebasedatabase.app/",
    authDomain: "form-30391.firebaseapp.com",
    projectId: "form-30391",
    storageBucket: "form-30391.appspot.com",
    messagingSenderId: "998447913500",
    appId: "1:998447913500:web:1c4d5b6a4783d246545dd9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app);


login.addEventListener('click', (e)=>{
    signInWithRedirect(auth, provider);
})




// const auth = getAuth();

// document.getElementById('dashboard').style.display= "none"
// document.getElementById("login").addEventListener('click', GoogleLogin)
// document.getElementById("logout").addEventListener('click', LogoutUser)

// let provider = new firebaseConfig.auth.GoogleAuthProvider()

// function GoogleLogin(){
//     console.log("login btn call")
//     firebaseConfig.auth().signInWithPopup(provider).then(res=>{
//         console.log(res.user)
//         document.getElementById("LoginScreen").style.display = "none"
//         document.getElementById("dashboard").style.display = "block"
//         showUserDetails(res.user)
//     }).catch(e=>{
//         console.log(e)
//     })
// }

// function showUserDetails(user){
//     document.getElementById("userDetails").innerHTML = `
//     <img src = "${user.photoURL}" style = "width: 10%" style = "border-radius: 100%">
//     <p>Name: ${user.displayName}</p>
//     <p>Email: ${user.email}</p>
//     `
// }

// function checkAuthState(){
//     firebaseConfig.auth().onAuthStateChanged(user =>{
//         if(user){
//             document.getElementById("LoginScreen").style.display = "none"
//             document.getElementById("dashboard").style.display = "block"
//             showUserDetails(user)
//         }else{

//         }
//     })
// }

// function LogoutUser(){
//     console.log('Logout Btn Call')
//     firebaseConfig.auth().signOut().then(()=>{
//         document.getElementById("LoginScreen").style.display = "block"
//         document.getElementById("dashboard").style.display = "none"
//     }).catch(e=>{
//         console.log(e)
//     })
// }
// checkAuthState()