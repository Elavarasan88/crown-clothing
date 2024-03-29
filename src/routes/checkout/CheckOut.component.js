import {useContext} from 'react'

import {CartDropdownContext} from '../../context/CartDropdown.context'

import './checkout.style.scss'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'

const CheckOut = () =>{
    const { cartItems,addItemToCart,removeItemFromCart} = useContext(CartDropdownContext)
    return(
        <div className = 'checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map((cartItem) =>{
                    return    <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
                })
            }

            <span className='total'></span>
        </div>
    )
}
export default CheckOut