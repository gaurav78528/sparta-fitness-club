import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyATOnsvfNsYy611vxUl-BFo7etmSivBUtU",
  authDomain: "sparta-fitness-club.firebaseapp.com",
  projectId: "sparta-fitness-club",
  storageBucket: "sparta-fitness-club.appspot.com",
  messagingSenderId: "875242413242",
  appId: "1:875242413242:web:3be6bd241fe7b1a0537683",
  measurementId: "G-VT2R8M7LBB",
};

//Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app

