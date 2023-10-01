import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import OffersSection from "./OffersSection/OffersSection";
import LandingPageShimmerUI from "./LandingPageShimmerUI";
import "./LandingPage.css";
import FoodItemsSection from "./FoodItemsSection/FoodItemsSection";

const LandingPage=()=>{

    const [foodItems,setFoodItems]=useState([]);
    const [offersList,setOffersList]=useState([]);
    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{

        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=MOBILE_WEB_LISTING")
        .then((response)=>{
            console.log(response.data);
            setOffersList(response.data.data.cards[0].card.card.imageGridCards.info);
        })
        .catch(()=>{
            console.log("get request failed");
        });

        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId="+65797+"&catalog_qa=undefined&submitAction=ENTER")
        .then((response)=>{
            console.log(response.data);
            setFoodItems(response.data.data.cards);
        })
        .catch(()=>{
            console.log("Get request failed");
        });
    }

    if(offersList.length==0){
        return <LandingPageShimmerUI/>
    }

    return(
        <div className="landingPage-container">
            <Header/>
            <OffersSection offersList={offersList}/>
            <FoodItemsSection foodItems={foodItems}/>
        </div>
    );
}

export default LandingPage;
