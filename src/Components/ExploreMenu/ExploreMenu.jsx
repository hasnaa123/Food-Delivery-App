import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets';

/* array.map(callback(currentValue, index, array), thisArg); */
const ExploreMenu = ({category,setCategory}) => {
  return (
     <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu feauturing a delectable array of disshes.Our mission is to satisfy your cravings and elevate your dining experience, one delecious meal at time</p>

        <div className='explore-menu-list'>
  {menu_list.map((item, index) => (
    <div
      onClick={() => setCategory(prev => (prev === item.menu_name ? "ALL" : item.menu_name))}
      className="explore-menu-item"
      key={item.id || index} // Use a unique property like `id` or fallback to the index
    >
      <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
      <p>{item.menu_name}</p>
    </div>
  ))}
</div>
     <hr />
    </div>
  )
}

export default ExploreMenu
