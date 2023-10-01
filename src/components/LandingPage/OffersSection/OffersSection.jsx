

const OfferSection=({offersList})=>{

    const infiniteScroll=offersList.map((offers,i)=>{
            return(<img className="offers-card" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"+offers.imageId} key={i} alt="not loaded"></img>);
        });
    
    const array = Array.from({ length: 100 }, (_, index) => `Element ${index + 1}`);
    
    console.log(offersList);
    
    return(
        <div className="offersSection-container">
            <div className="offers-slider-track">
                {array.map(()=>{
                    return(infiniteScroll);
                }
            )}
            </div>
        </div>
    );
}

export default OfferSection;