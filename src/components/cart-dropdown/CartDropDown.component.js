import { useContext } from 'react'
import './cartDropDown.style.scss'
import Button from '../buttons/Button.component'
import { CartDropdownContext } from '../../context/CartDropdown.context'
import CartItem from '../cartItem/CartItem.component'

const CartDropDown = () =>{
    const {cartItems} = useContext(CartDropdownContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>(
                    <CartItem key={item.id} cartItem = {item}/>
                ))} 
            </div>
            <Button>Check Out</Button>
        </div>
    )
}
export  default CartDropDown 