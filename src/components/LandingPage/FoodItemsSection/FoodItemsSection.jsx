import { useState } from "react";
import FoodItemCard from "./FoodItemCard/FoodItemCard";
import {useSelector } from "react-redux";

const FoodItemsSection=({foodItems})=>{
    
    const [vegOnly,setVegOnly]=useState(false);
    const [showItems1,setShowItems1]=useState(true);
    const [showItems2,setShowItems2]=useState(true);
    

    const cartItems=useSelector((store)=>store.cart.items);
    const cost=useSelector((store)=>store.cart.cost);
    const totalCost=useSelector((store)=>store.cart.totalCost);

    const vegOnlyClick=()=>{
        setVegOnly(!vegOnly);
    }

    const handleClick1=()=>{

        setShowItems1(!showItems1);

    }
    const handleClick2=()=>{
        setShowItems2(!showItems2);
    }

    console.log(cartItems);
    console.log(cost);
    console.log(totalCost);

    return(
        <div className="restaurants-menu-card-container">
            <div className="veg-toggle-container">
                <h3>Veg Only</h3>
                <div onClick={vegOnlyClick} className={`veg-toggle ${vegOnly ? 'clicked':''}`}>
                    <div className="outer-circle">
                    </div>
                </div>
            </div>
            <div className="hr"></div>
            <div className="title" onClick={handleClick1} >
                <h2>{foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title} {"("+foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.length+")"}</h2>
                <i className={`fa-solid fa-chevron-down ${showItems1 ? 'rotate':''}`}></i>
            </div>
            {(showItems1==true)?(
                foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((card,index)=>{
                    return(
                        <FoodItemCard key={index} card={card}/>
                    )  
                })
                ):(
                    null
                )
            }
            <div className="hr"></div>
            <div className="title" onClick={handleClick2} >
                <h2>{foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title} {"("+foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.length+")"}</h2>
                <i className={`fa-solid fa-chevron-down ${showItems2 ? 'rotate':''}`}></i>
            </div>
            {(showItems2==true)?(
                foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((card,index)=>{
                    return(
                        <FoodItemCard key={index} card={card}/>
                    );  
                })
                ):(
                    null
                )
            }   
            <div className="hr"></div>
            {(cartItems.length>0)?(
                <div className="added-items-pop-up">
                    <div className="added-items-pop-up-div1">
                        <h4>{cartItems.length} items |</h4>
                        <h4>₹{totalCost}</h4>
                    </div>
                    <div className="added-items-pop-up-div2">
                    <h4>View Cart</h4>
                    <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            ):(
                null
            )}
        </div>
    );
}

export default FoodItemsSection;