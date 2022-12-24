import { useContext } from "react";


import Button from "../buttons/Button.component"
import './product.style.scss'
import { CartDropdownContext } from "../../context/CartDropdown.context";
const Product = ({product}) =>{
    const { name ,imageUrl , price } = product;
    const { addItemToCart } = useContext(CartDropdownContext);
    
    const addProductToCart = () => addItemToCart(product);

    return(
        <div className="product-card-container">
            <img src={imageUrl}/>
            <div className="footer">
                <span className="name">{name} </span>
                <span className="price">{price} </span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
        </div>
    )
}
export default Product