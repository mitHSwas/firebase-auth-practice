// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc7EsWp0B7ODskdcQHaakssBJKehgAa1c",
    authDomain: "fir-auth-practice-762b6.firebaseapp.com",
    projectId: "fir-auth-practice-762b6",
    storageBucket: "fir-auth-practice-762b6.appspot.com",
    messagingSenderId: "432131622230",
    appId: "1:432131622230:web:564359b83843728b2cc2f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;