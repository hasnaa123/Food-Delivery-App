/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/contexte';
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = React.useState("home");
  const {cartItems} = useContext(StoreContext);
  const uniqueItemsCount = Object.keys(cartItems).length;/*how many elements in the cart type object */
  return (
    <div className='Navbar'>
      <img src={assets.slogon} alt="" className='logo' />
        <ul className='navbar-menu'>
           <Link to="/" onClick={()=>{setMenu("home")}} className={ menu==="home"?"active":""}>home</Link>
           <a href="#explore-menu" onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
           <a href='#app-download' onClick={()=>{setMenu("mobile-app")}}className={menu==="mobile-app"?"active":""}>mobile-app</a>
           <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} />
        <div className="nabvar-search-icon">
          <Link to="/your-order"><img src={assets.basket_icon} alt='' /></Link>  
          <div className='dot'><p>{uniqueItemsCount}</p></div>
        </div>
<button onClick={()=>{setShowLogin(true)}}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
