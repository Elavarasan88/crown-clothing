import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider } from 'firebase/auth'
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"    
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid)


  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()){
    const { displayName,email } = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        userName : displayName,
        email,
        createdAt
      });
    }
    catch(error){
      console.log(error.message)
    }
  }
  return userDocRef;

}