

// INITIALISE
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, Firestore, getDoc, setDoc, collection, getDocs,collectionGroup } from 'firebase/firestore';
import { useDocumentData, useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, query, where, orderBy } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBHHKuSWR0i9bTv5d51FjHYl9Y_Q2K2D9c",
  authDomain: "linkuni-4dbc8.firebaseapp.com",
  projectId: "linkuni-4dbc8",
  appId: "1:793681461612:web:3b5f3e334fb040391ef349"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

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

type Props={
  title:string
  category:string
  id:string
  tags:string[]
  description:string
}
// apis


const colRef = collection(db, "links");

// default: time-descending order
export const getCategories = async()=> {
  try{
    return getDocs(colRef).then((snapshot)=>(snapshot?.docs[0].data().name)
      // const allLinks:any =[]
      // snapshot.docs.forEach((doc)=>{
      //   allLinks.push({...doc.data(),id:doc.id})
      // })
     
    )}catch(err){console.error(err)}
}
type Links={
  title:string,
  url:string,
  id:string
}[]
export const getSingCategoryData = async(category:string)=>{
  try{
    const categoryLinks:Links =[];
    const fetchCategoryData = await getDocs(collectionGroup(db,category));

    const result = fetchCategoryData.docs.forEach(link =>{
        // add obj: title,url,id
        categoryLinks.push({...link.data(),id:link.id})
      })
      return categoryLinks // NOT WORKING WHY
  
    }catch(err){console.error(err)}
}

export const getAllCategoryData = async(categories:string[])=>{
  const ALLCATEGORYDATA= {}
  
  categories.map(async(category) =>{
    const mapResult = await getSingCategoryData(category)
    const addData = ALLCATEGORYDATA[category] = mapResult;
  } 
  )
  // console.log("FINALLY",ALLCATEGORYDATA)
  return ALLCATEGORYDATA;
}

export const addNewLink = async(obj:Props)=>{
  try{
    // await setDoc(doc(db, "cities", "LA"), {
      await setDoc(doc(db, obj.category, obj.id), {
      title:obj.title,
      id:obj.id,
      tags:obj.tags,
      description:obj.description
    });

  }catch(err){console.error(err)}
}

export const updateALink = async()=>{
  try{

  }catch(err){console.error(err)}
}




export const deleteALink = async()=>{
  try{

  }catch(err){console.error(err)}
}

