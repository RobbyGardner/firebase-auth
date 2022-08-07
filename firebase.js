import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAwxBU2xThplSNgRq0KRyfE__Vgu81Ffw",
  authDomain: "fir-auth-96280.firebaseapp.com",
  projectId: "fir-auth-96280",
  storageBucket: "fir-auth-96280.appspot.com",
  messagingSenderId: "467579729761",
  appId: "1:467579729761:web:6454caeb2cd4d50ad03720",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
