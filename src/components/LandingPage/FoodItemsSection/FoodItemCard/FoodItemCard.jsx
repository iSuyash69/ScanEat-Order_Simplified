const FoodItemCard=({card})=>{
    
    return(
        <div className="menu-card">
            <div id="one">
                <h3>{card.card.info.name}</h3>
                <p>₹{card.card.info.price/100}</p>
                <h4>{card.card.info.description}</h4>
            </div>
            <div id="two">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+card.card.info.imageId} alt="not loaded"></img>
                <button>ADD</button>
            </div>
            <hr></hr>
        </div>
    );
}


export default FoodItemCard; 