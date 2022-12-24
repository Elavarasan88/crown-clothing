import { Fragment ,useContext} from "react"
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/083 crown.svg'
import { UserContext } from "../../context/User.context"
import { CartDropdownContext } from "../../context/CartDropdown.context"
import './navigation.style.scss'
import { signOutMethod } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/CartIcon.component'
import CartDropDown from '../../components/cart-dropdown/CartDropDown.component'
const Navigation = () =>{
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartDropdownContext)

    return(
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to ='/'><CrwnLogo/></Link>
                <div className="nav-links-container">
                    <Link className ='nav-link' to='/shop'>SHOP</Link>
                    {
                        currentUser?(
                            <Link className ='nav-link' to='/auth' onClick={signOutMethod} >SIGN OUT</Link>
                        ) : (
                            <Link className ='nav-link' to='/auth'>SIGN IN</Link>

                        )
                    }
                    <CartIcon/>
                </div>     {
                    isCartOpen && (<CartDropDown />)
                } 
            
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation