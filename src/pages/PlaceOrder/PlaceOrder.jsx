import "./PlaceOrder.css"
import { StoreContext } from "../../context/contexte"
import { useContext } from "react"
const PlaceOrder = () => { 
   const {getTotalCartAmount} = useContext(StoreContext)
     const totalAmount = getTotalCartAmount();
  return (
   
  <form className='place-order'>
   
<div className="place-order-left">
  <p className="title">Delivery Information</p>
   <div className="multi-fields">
    <input type="text"  placeholder="First Name"/>
    <input type="text" placeholder="Last Name"/>
   </div>
   <input type="email" placeholder="Email Adresse"/>
   <input type="text" placeholder="Street"/>

   <div className="multi-fields">
    <input type="text"  placeholder="City"/>
    <input type="text" placeholder="State"/>
   </div>

   <div className="multi-fields">
    <input type="text"  placeholder="Zip Code"/>
    <input type="text" placeholder="Country"/>
   </div>
   <input type="text" placeholder="phone" />
</div>

<div className="place-order-right">
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
                <p>{totalAmount===0?0:20} DHS</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <b>{totalAmount===0?0:totalAmount+20} DHS</b>
                
              </div>
            </div>
            <button >Payement</button>
          </div>
  
</div>
   </form>

  )
}

export default PlaceOrder
