import { useContext } from 'react';
import { ProductsContext } from '../../context/Product.context';
import './shop.style.scss'
import Product from '../../components/product/Product.component'

const Shop = () =>{

    const {products} = useContext(ProductsContext)

return(
    <div className='products-container'> 
    {
        products.map((product)=>(
        <Product  product = {product} key = {product.id} ></Product>
        ))
    }
    </div>
)
}
export default Shop