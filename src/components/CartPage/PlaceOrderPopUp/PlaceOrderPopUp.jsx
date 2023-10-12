import { useSelector } from "react-redux";
import "./PlaceOrderPopUp.css";


const PlaceOrderPopUp=()=>{
    const totalCost=useSelector((store)=>{store.cart.totalCost});
    return(
        <div className="place-order-pop-up">
            {/* <h3>₹{totalCost}</h3> */}
            <h2>Place Order</h2>
        </div>
    );
}

export default PlaceOrderPopUp;