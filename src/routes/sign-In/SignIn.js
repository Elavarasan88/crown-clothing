import React from 'react'
import { signInWithGooglePopup , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
    
  }
  return (
    <div>
      <button onClick={logGoogleUser} > SignIn with google</button>

    </div>
  )
}

export default SignIn