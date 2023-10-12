import { useSelector } from "react-redux";
import "./CartPage.css";
import CartItemCard from "./CartItemCard/CartItemCard";
import { Link } from "react-router-dom";
import PlaceOrderPopUp from "./PlaceOrderPopUp/PlaceOrderPopUp";

const CartPage=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
            <div className="cart-page-main-container">
                <div className="cart-page-title">
                    <Link to={"/"}><i style={{fontSize:'20px'}} className="back-cdn" class="fa-solid fa-arrow-left"></i></Link>
                    <div>
                        <h3>Cart</h3>
                        <i  class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div className="cart-page-cart-items-container">
                    {cartItems.map((card,index)=>{
                        return(
                            <CartItemCard card={card} key={index}/>
                        );
                    })}
                </div>
                <PlaceOrderPopUp/>
            </div>
    );
}

export default CartPage;