import { useEffect } from "react";
import  ReactDOM from "react-dom"; 
import "./FoodItemPopUpModal.css";

const FoodItemPopUpModal=({card,foodItemPopUp,setFoodItemPopUp,addItem,handleClick})=>{

    useEffect(()=>{overFlow();},[foodItemPopUp]);
    const overFlow=()=>{
        if(foodItemPopUp==true){
        document.body.style.overflow="hidden";
        }
        else{
            document.body.style.overflow="scroll";
        };
    }
    
    const handleClickEvent=()=>{
        handleClick();
        setFoodItemPopUp(false);
    }

    if(!foodItemPopUp){
        return null;
    }
    
    return ReactDOM.createPortal(
        <div>
            <div className="food-item-popup-modal" onClick={()=>{setFoodItemPopUp(false)}}></div>
            <div className="food-item-popup-modal-main-container">
                <div className="food-item-popup-modal-sub-container1">
                    <i className="fa-solid fa-x close-pop-up" onClick={()=>{setFoodItemPopUp(false)}}></i>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+card.card.info.imageId} alt="not loaded"></img>
                </div>
                <div className="food-item-popup-modal-sub-container2">
                    <div>
                        {(card.card.info.isVeg==1)?(
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/180px-Veg_symbol.svg.png?20131205102827"></img>
                            ):(
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/180px-Non_veg_symbol.svg.png?20131205102929"></img>
                            )}
                        <h3>{card.card.info.name}</h3>
                        <p>₹{card.card.info.price/100}</p>
                    </div>
                    <button onClick={handleClickEvent}>{addItem}</button>
                </div>
                <div className="food-item-popup-modal-sub-container3">
                    <h4>{card.card.info.description}</h4>
                </div>
            </div>
            </div>,
            document.querySelector(".portal-food-card")
    );
}

export default FoodItemPopUpModal;