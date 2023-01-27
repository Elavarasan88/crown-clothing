import { useContext } from 'react'
import './cartDropDown.style.scss'
import Button from '../buttons/Button.component'
import { CartDropdownContext } from '../../context/CartDropdown.context'
import CartItem from '../cartItem/CartItem.component'
import {useNavigate} from 'react-router-dom';

const CartDropDown = () =>{
    const navigate = useNavigate()
    const navigationHandler = () => {
        navigate('/checkout')
    }
    const {cartItems} = useContext(CartDropdownContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} cartItem = {item}/>
                ))} 
            </div>  
            <Button onClick = {navigationHandler}>Check Out</Button>
        </div>
    )
}
export  default CartDropDown 