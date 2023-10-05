import { useState } from "react";
import FoodItemPopUpModal from "./FoodItemPopUpModal/FoodItemPopUpModal";
import { useDispatch } from "react-redux";
import { addItem, removeItem,addCost } from "../../../utils/ReduxStore/cartSlice/cartSlice";

const FoodItemCard=({card})=>{
    
    const [addItems,setAddItem]=useState("ADD");
    const [foodItemPopUp,setFoodItemPopUp]=useState(false);

    const dispatchAction=useDispatch();

    console.log(`food :${foodItemPopUp}`);

    const handleClick=(card)=>{
        if(addItems=='ADD'){
            setAddItem('ADDED');
            dispatchAction(addItem(card));
            dispatchAction(addCost(card.card.info.price/100));
        }
        else{
            setAddItem('ADD');
            dispatchAction(removeItem());
        }
    }
    return(
        <div className="menu-card">
            <div id="one" onClick={()=>{setFoodItemPopUp(true)}}>
                {(card.card.info.isVeg==1)?(
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/180px-Veg_symbol.svg.png?20131205102827"></img>
                    ):(
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/180px-Non_veg_symbol.svg.png?20131205102929"></img>
                    )}
                <h3>{card.card.info.name}</h3>
                <p>₹{card.card.info.price/100}</p>
                <h4>{card.card.info.description}</h4>
            </div>
            <div id="two">
                <img onClick={()=>{setFoodItemPopUp(true)}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+card.card.info.imageId} alt="not loaded"></img>
                <button onClick={()=>handleClick(card)}>{addItems}</button>
            </div>
            <FoodItemPopUpModal card={card} foodItemPopUp={foodItemPopUp} setFoodItemPopUp={setFoodItemPopUp} addItem={addItems} handleClick={()=>handleClick(card)}/>
            <hr></hr>
        </div>
    );
}


export default FoodItemCard; 