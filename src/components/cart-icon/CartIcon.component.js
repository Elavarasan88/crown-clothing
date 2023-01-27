import {useContext} from 'react'
import './cartIcon.style.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartDropdownContext } from '../../context/CartDropdown.context'


const CartIcon = () =>{
    const cartToggle = () => setIsCartOpen(!isCartOpen);
    
    const {isCartOpen,setIsCartOpen,cartCount } = useContext(CartDropdownContext)
    return(
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={cartToggle}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon