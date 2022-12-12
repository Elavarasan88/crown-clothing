import { Fragment } from "react"
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/083 crown.svg'
import './navigation.style.scss'
const Navigation = () =>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to ='/'><CrwnLogo/></Link>
                <div className="nav-links-container">
                    <Link className ='nav-link' to='/shop'>Shop</Link>
                    <Link className ='nav-link' to='/signIn'>SignIin</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation