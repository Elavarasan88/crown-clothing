import { initializeApp } from "firebase/app";
import { getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfNXQH080SgDKJ4rqmzz1Tltwt1LS8ZDA",
  authDomain: "crwn-clothing-b2936.firebaseapp.com",
  projectId: "crwn-clothing-b2936",
  storageBucket: "crwn-clothing-b2936.appspot.com",
  messagingSenderId: "847647880021",
  appId: "1:847647880021:web:5c9558d6e460ea967135dc"
};

const firebaseApp = initializeApp(firebaseConfig);
  // set up provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"    
});
  //  set up auth
export const auth = getAuth();

  // set up signIng with popup
export const signInWithGooglePopup = async () => {
  
  await signInWithPopup(auth,provider);}

export const signOutMethod = () => signOut(auth)


// firestore storing setup

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation) => {
  const userDocId = doc(db,'users',userAuth.uid)
  const userSnapShot = await getDoc(userDocId);
  
  //user dosen't exists 

  if(!userSnapShot.exists()){
    const { displayName,email } = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocId,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch(error){
      console.log(error.message)
    }
  }
  return userDocId;

}

export const createAuthUserWithEmailandPassword = async (email,password) =>{
  if(!email||!password){
    return
  }
  return await createUserWithEmailAndPassword(auth,email,password)

}
export const signInAuthUserWithEmailandPassword = async (email,password) =>{
  if(!email||!password){
    return
  }
  return await signInWithEmailAndPassword(auth,email,password)

}

export const onAuthStateChangedListener = (callback) =>{
  onAuthStateChanged(auth,callback)
}