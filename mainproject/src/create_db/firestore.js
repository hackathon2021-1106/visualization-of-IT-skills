import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey:process.env.VUE_APP_API_KEY,
    authDomain: "hackathon2021-1106.firebaseapp.com",
    projectId: "hackathon2021-1106",
    storageBucket: "hackathon2021-1106.appspot.com",
    messagingSenderId:process.env.VUE_APP_MESSAGEING_SEND_ID,
    appId:process.env.VUE_APP_APP_ID,
  };
  
initializeApp(firebaseConfig);

const db=getFirestore();

export default db;