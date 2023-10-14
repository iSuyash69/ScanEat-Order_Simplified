const PendingCard=({card})=>{
    return(
        <div className="pending-item-card">
            <h1>{card.name}</h1>
            <h2>{card.college}</h2>
            <h3>{card.address}</h3>
        </div>
    );
}

export default PendingCard;