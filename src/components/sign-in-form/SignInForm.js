import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailandPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../buttons/Button.component'
import InputForm from '../input-components/Input.form'
import './signInForm.style.scss'

const SignInForm = () => {

    const defaultFields = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }


    const [formField,setFormField] = useState(defaultFields);
    const {displayName,email,password,confirmPassword} = formField;

    const resetField = () =>{
        setFormField(defaultFields)
        console.log(formField)
    }
    const eventHandler = (event) =>{
        const {name,value} = event.target;
        setFormField({...formField,[name] : value})
        console.log(formField)
    }
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password ===! confirmPassword){
            alert('passsword and confirm password are not equal');
            return
        }
        try{
            const {user} = await createAuthUserWithEmailandPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetField()
            

        }
        

        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use')
            }else{
            console.log(error)}
        }
 
    }

  return (
    <div className = 'sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <InputForm  label = 'Display Name' type = 'text' name ='displayName' onChange={eventHandler} value = {displayName} required/>
            <InputForm label = 'Email' type = 'email' name='email' onChange={eventHandler} value = {email} required/>
            <InputForm label = 'Password' type = 'password' name='password' onChange={eventHandler} value = {password} required/>
            <InputForm label = 'Conform Password' type = 'password' name='confirmPassword' onChange={eventHandler} value = {confirmPassword} required/>
            <Button buttonType='inverted' type = 'submit' >Sign In</Button>
        </form>
    </div>
  )
}

export default SignInForm