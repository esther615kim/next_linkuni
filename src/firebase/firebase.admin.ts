

// INITIALISE
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBHHKuSWR0i9bTv5d51FjHYl9Y_Q2K2D9c",
  authDomain: "linkuni-4dbc8.firebaseapp.com",
  projectId: "linkuni-4dbc8",
  appId: "1:793681461612:web:3b5f3e334fb040391ef349"
};

export const app = initializeApp(firebaseConfig);

// AUTH
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const googleLogin = async()=>{
try{
  const signIn = await signInWithPopup(auth,provider)
  if(signIn) {
    console.log(signIn.user.displayName, signIn.user)
  }
        // get data
      // change user status true,name,uid
}catch(err){console.error(err)}
}

export const googleLogout = async()=>{
  try{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("logged out!")
    })
  }catch(err){console.error(err)}
}