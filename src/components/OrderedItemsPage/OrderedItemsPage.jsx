import { useSelector } from "react-redux";
import "./OrderedItemsPage.css";
import OrderedItemCard from "./OrderedItemCard/OrderedItemCard";

const OrderedItemsPage=()=>{

    const allItems=useSelector((store)=>{return(store.allItems.items);});
    console.log(allItems);

    if(allItems.length==0){
        return <h3 style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:'100vw',textAlign:'center'}}>No orders placed yet</h3>

    }

    return(
        <div className="ordered-items-main-container">
            <div className="ordered-items-sub-container">
                <h3 className="ordered-items-sub-container-title">Ordered</h3>
                <div className="ordered-item-card-container">
                    {allItems.map((order)=>{
                       return order.item.map((card,index)=>{
                            return <OrderedItemCard card={card} time={order.time} key={index}/>
                        });
                    })}
                </div>
            </div>
            <div className="ordered-items-sub-container">
                <h3 className="ordered-items-sub-container-title">Preparing</h3>
                <div style={{justifyContent:'center'}} className="ordered-item-card-container">
                    <h4 style={{fontWeight:'400',fontSize:'15px',textAlign:'center'}}>No items in the preparing</h4>
                </div>
            </div>
            <div className="ordered-items-sub-container">
                <h3 className="ordered-items-sub-container-title">Delivered</h3>
                <div style={{justifyContent:'center'}} className="ordered-item-card-container">
                    <h4 style={{fontWeight:'400',fontSize:'15px',textAlign:'center'}}>No items delivered yet</h4> 
                </div>
            </div>
        </div>
    )
}

export default OrderedItemsPage;