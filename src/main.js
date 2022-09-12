import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwexZTg0zdlgHbz43fIqbi-H39CfpOnXI",
  authDomain: "hittaprogrammerare-de354.firebaseapp.com",
  projectId: "hittaprogrammerare-de354",
  storageBucket: "hittaprogrammerare-de354.appspot.com",
  messagingSenderId: "341446977298",
  appId: "1:341446977298:web:aa48695c20bd7a9f23f5cb",
  measurementId: "G-6KLHJF0GEM"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
getAuth();

const app = createApp(App)

app.use(router)

app.mount('#app')
