import { useState } from "react";

const FoodItemCard=({card})=>{
    
    const [addItem,setAddItem]=useState("ADD");

    const handleClick=()=>{
        setAddItem(addItem=="ADD"?"ADDED":"ADD");
    }

    return(
        <div className="menu-card">
            <div id="one">
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
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+card.card.info.imageId} alt="not loaded"></img>
                <button onClick={handleClick}>{addItem}</button>
            </div>
            <hr></hr>
        </div>
    );
}


export default FoodItemCard; 