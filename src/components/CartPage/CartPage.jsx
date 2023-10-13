import { useSelector } from "react-redux";
import "./CartPage.css";
import CartItemCard from "./CartItemCard/CartItemCard";
import { Link } from "react-router-dom";
import PlaceOrderPopUp from "./PlaceOrderPopUp/PlaceOrderPopUp";
import emptyCartImg from "/assets/images/Empty cart illustration-fotor-bg-remover-2023101218357.png";

const CartPage=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
            <div className="cart-page-main-container">
                <div className="cart-page-title">
                    <Link to={"/"}><i style={{fontSize:'20px'}} className="back-cdn" class="fa-solid fa-arrow-left"></i></Link>
                    <div>
                        <h3>Cart</h3>
                        <i style={{color:'gray'}} class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                {(cartItems.length==0) ?(
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <img style={{marginTop:'40%'}} src={emptyCartImg}></img>
                        <h3 style={{alignSelf:'center',color:'grey'}}>Your Cart is Empty</h3>
                    </div>
                ):(
                    <div>
                        <div className="cart-page-cart-items-container">
                        {cartItems.map((card,index)=>{
                            return(
                                <CartItemCard card={card} key={index}/>
                            );
                        })}
                        </div>
                        <PlaceOrderPopUp/>
                    </div>
                )}
            </div>
    );
}

export default CartPage;