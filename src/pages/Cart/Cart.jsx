import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/contexte'
const Cart = () => {
  
  const {cartItems,food_list,removeFromCart,remove,getTotalCartAmount} = useContext(StoreContext)
  const totalAmount = getTotalCartAmount();
  console.log("am",totalAmount);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          
    </div>
    <br />
     <hr />
     {food_list.map((item,index)=>{
      if(cartItems[item._id]>0){
        return(
          <div className='cart-items-title cart-items-item'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.price} DHs</p>
            <p>{cartItems[item._id]}</p>
            <p>{item.price*cartItems[item._id]}DHS</p>
            <p onClick={()=>{remove(item._id)}}>x</p>
            
          </div>
          
          
        )
      }
 
     })}<hr />
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Free</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <b>{totalAmount} DHS</b>
                
              </div>
            </div>
            <button>Checkout</button>
          </div>
          <div className="cart-promocode">
            <div className='cart-promo-code-input'>
         <input type="text"  placeholder='promo code'/>
           <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      
      
  )
}

export default Cart
