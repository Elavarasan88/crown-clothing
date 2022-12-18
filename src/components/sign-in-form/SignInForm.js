import React from 'react'
import { useState } from 'react'
import { 
     createUserDocumentFromAuth,
     signInWithGooglePopup,
    signInAuthUserWithEmailandPassword
} from '../../utils/firebase/firebase.utils'
import Button from '../buttons/Button.component'
import InputForm from '../input-components/Input.form'
import './sign-in-form.scss'

const SignInForm = () => {

    const defaultFields = {
        email : '',
        password : '',
    }


    const [formField,setFormField] = useState(defaultFields);
    const {email,password} = formField;

    const resetField = () =>{
        setFormField(defaultFields)
    }
    const eventHandler = (event) =>{
        const {name,value} = event.target;
        setFormField({...formField,[name] : value})
    }
    
    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        
      }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailandPassword(email,password);
            console.log(response);
            resetField()
        }
        

        catch(error){
            switch(error.code){
                case  'auth/wrong-password':
                    alert('incorrect password for email');
                break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')    
                default:
                    console.log(error.code)
            
                }
        }
 
    }

  return (
    <div className = 'sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <InputForm label = 'Email' type = 'email' name='email' onChange={eventHandler} value = {email} required/>
            <InputForm label = 'Password' type = 'password' name='password' onChange={eventHandler} value = {password} required/>
            <div className='buttons-container'>
                <Button  type = 'submit' >Sign In</Button>
                <Button type ='button' buttonType='google' onClick = {signInWithGoogle} >Google Sign-In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm