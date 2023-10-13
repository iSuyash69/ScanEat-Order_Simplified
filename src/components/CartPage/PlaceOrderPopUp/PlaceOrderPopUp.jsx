import { useSelector } from "react-redux";
import "./PlaceOrderPopUp.css";

const PlaceOrderPopUp=()=>{
    const totalCost=useSelector((store)=>{ return (store.cart.totalCost);});
    console.log(totalCost);
    return(
        <div className="place-order-pop-up">
            <h3>₹{totalCost}</h3>
            <h2>Place Order</h2>
        </div>
    );
}

export default PlaceOrderPopUp;