import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import subCategoryMockData from "/src/subCategoryMockData.json";
import FoodItemCard from "../LandingPage/FoodItemsSection/FoodItemCard/FoodItemCard"
import "./SubCategoryPage.css";
import { useSelector } from "react-redux";
import CartPopUp from "../CartPopUp/CartPopUp";

const SubCategoryPage=()=>{

    const [foodItems,setFoodItems]=useState([]);
    const {subCategoryName}=useParams();

    const cartItems=useSelector((store)=>store.cart.items);

    useEffect(()=>{window.scroll(0,0)},[]);
    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{
        setFoodItems(subCategoryMockData);
    }

    return(
        <div className="sub-category-main-container">
            <div className="sub-category-title">
                <Link to={"/"}><i style={{fontSize:'20px'}} className="back-cdn" class="fa-solid fa-arrow-left"></i></Link>
                <h3>This is {subCategoryName} category page</h3>
            </div>
            <div className="sub-category-sub-container">
                {subCategoryMockData.map((card,index)=>{
                    return (
                        <FoodItemCard card={card} key={index}/>
                    );
                })}
            </div>
            {(cartItems.length>0)?(
                <CartPopUp/>
            ):(
                null
            )}
        </div>
    );
}

export default SubCategoryPage;