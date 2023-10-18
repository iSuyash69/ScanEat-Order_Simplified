import {useDispatch, useSelector } from "react-redux";
import "./PlaceOrderPopUp.css";
import { emptyCart } from "../../utils/ReduxStore/cartSlice/cartSlice";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../utils/ReduxStore/allItemsSlice/allItemsSlice";

const PlaceOrderPopUp=({special_instruction})=>{

    const navigate =useNavigate();
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>{return(store.cart.items);});
    const totalCost=useSelector((store)=>{ return (store.cart.totalCost);});

    console.log(totalCost);
    console.log(special_instruction);

    const selectedData = {
        items:cartItems.map(item => ({
            item_id: item.item_id,
            name: item.name,
            quantity: item.quantity 
        })),
        special_instruction:special_instruction
    };
    
    const postData=(event)=>{
        console.log(selectedData);
        dispatch(addItem({
            item:cartItems,
            time:new Date().toLocaleTimeString(),
        }));

        Swal.fire({
            icon:'success',
            html: '<span style="font-weight: bold;">Order Placed Successfully</span>',
            showConfirmButton:false,
            timer:3000,
            didDestroy:function(){
                dispatch(emptyCart());
                navigate("/");
            }
        });

        // event.preventDefault();
        // axios.post("http://192.168.1.136:8080/home/1/placeOrder",selectedData)
        // .then((response)=>{
        //     console.log(response.data);
        // })
        // .catch(()=>{
        //     console.log("post request failed")
        // })
    }

    return(
        <div className="place-order-pop-up">
            <h3>₹{totalCost}</h3>
            <h2 style={{cursor:'pointer'}} onClick={postData}>Place Order</h2>
        </div>
    );
}

export default PlaceOrderPopUp;

