// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs8NPNnho4BxQ15PAYTwswYWeUs8FmJpU",
    authDomain: "form-30391.firebaseapp.com",
    projectId: "form-30391",
    storageBucket: "form-30391.appspot.com",
    messagingSenderId: "998447913500",
    appId: "1:998447913500:web:1c4d5b6a4783d246545dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("email")
var password = document.getElementById("password")

window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert(obj.email + " is succesfully registered!")
        window.location.replace("login.html")
    })
    .catch(function(err){
        alert("error"+err)
    })
    console.log(obj)
};


























// function signUp(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//     promise.catch(e=> alert(e.message));

//     alert("Signed In");
// }