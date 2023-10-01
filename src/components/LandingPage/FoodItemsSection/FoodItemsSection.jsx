import FoodItemCard from "./FoodItemCard/FoodItemCard";

const FoodItemsSection=({foodItems})=>{
    
    console.log(foodItems[3]);

    return(
        <div className="restaurants-menu-card-container">
            <hr className="hr"></hr>
            <div className="title">
                <h2>{foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.title}</h2>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            {foodItems[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((card,index)=>{
                return(
                    <FoodItemCard key={index} card={card}/>
                );    
            })}
        </div>
    );
}

export default FoodItemsSection;