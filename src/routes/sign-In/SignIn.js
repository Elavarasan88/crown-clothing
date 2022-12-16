import SignInForm from '../../components/sign-in-form/SignInForm';
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
     const userDocRef = createUserDocumentFromAuth(user)
    
  }
  return (
    <div>
      <button onClick={logGoogleUser} > SignIn with google</button>
      <SignInForm/>
    </div>
  )
}

export default SignIn