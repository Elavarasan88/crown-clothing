import { createContext , useEffect, useState } from 'react'

const addCartItem = (cartItems,productToAdd) =>{
    //find if the CartItemm contain productToAdd
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);
    
    // if found increamnt quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity + 1 } 
            : cartItem
        ) }
    // return new array with modified cartItem // new CartItem
    return [...cartItems,{...productToAdd , quantity : 1}]
}
    


export const CartDropdownContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartIcon : [],
    addItemToCart : () => {},
    cartCount : 0
})

export const CartdropdownProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0);
        setCartCount(newCartCount)
    },[cartItems])

 
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount}
    return(
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}