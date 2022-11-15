

// INITIALISE
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHHKuSWR0i9bTv5d51FjHYl9Y_Q2K2D9c",
  authDomain: "linkuni-4dbc8.firebaseapp.com",
  projectId: "linkuni-4dbc8",
  appId: "1:793681461612:web:3b5f3e334fb040391ef349"
};

const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const gLogin = async()=>{
try{
  const signIn = await signInWithPopup(auth,provider)
  if(signIn) console.log(signIn.user)
}catch(err){console.error(err)}
}