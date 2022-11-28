

// INITIALISE
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { doc, Firestore, getDoc, setDoc, collection, getDocs,collectionGroup } from 'firebase/firestore';
import { useDocumentData, useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, query, where, orderBy } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY
  authDomain: process.env.FIREBASE_AUTO_DOMAIN
  projectId: process.env.FIREBASE_PROJECT_ID
  appId: process.env.FIREBSE_APP_ID
}

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
type AllCategoryData = any //FIX IT

export const getAllCategoryData = async(categories:string[])=>{

  const ALLCATEGORYDATA:AllCategoryData= []

  categories.map(async(category) =>{
    const mapResult = await getSingCategoryData(category)
    const addData = ALLCATEGORYDATA.push(mapResult) ; // FIX HERE to add category as key..
  } 
  )
  return ALLCATEGORYDATA;
}

export const addNewLink = async(obj:Props)=>{
  try{
    // await setDoc(doc(db, "cities", "LA"), {
      await setDoc(doc(db, obj.category), {
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

