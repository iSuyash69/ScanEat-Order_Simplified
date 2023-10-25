import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Header from "./Header/Header";
import OffersSection from "./OffersSection/OffersSection";
import LandingPageShimmerUI from "./LandingPageShimmerUI";
import "./LandingPage.css";
import FoodItemsSection from "./FoodItemsSection/FoodItemsSection";
import FoodTypeCardSection from "./FoodTypeCardSection/FoodTypeCardSection";
import mockData from '/src/mockData.json';
import OrderedItemsPopUp from "../OrderedItemsPage/OrderedItemsPopUp/OrderedItemsPopUp";
import BillPage from "../BillPage/BillPage";
import offersData from "/src/offersData.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTableId } from "../utils/ReduxStore/table_idSlice/table_idSlice";
import billData from "/src/bill.json";
// import managerData from "/managerData.json";

const LandingPage=()=>{

    const [offersList,setOffersList]=useState([]);
    const [foodItems,setFoodItems]=useState([]);
    const [allItems,setAllItems]=useState([]);
    const [bill,setBill]=useState([]);
    const [isBill,setIsBill]=useState(false);

    const {table_id}=useParams();
    const dispatch=useDispatch();

    dispatch(setTableId(table_id));
    sessionStorage.setItem('table_id', table_id);

    const id=useSelector((store)=>store.table_id.table_id);

    console.log(id);

    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{

        // axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=MOBILE_WEB_LISTING")
        // .then((response)=>{
        //     console.log(response.data);
        //     setOffersList(response.data.data.cards[0].card.card.imageGridCards.info);
        // })
        // .catch(()=>{
        //     console.log("offers Get request failed");
        // });
        setOffersList(offersData);

        // axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId="+5934+"&catalog_qa=undefined&submitAction=ENTER")
        // axios.get(`http://192.168.178.196:8080/home/${id}`)
        // .then((response)=>{
        //     console.log(response.data);
        //     setFoodItems(response.data);
        // })
        // .catch(()=>{
        //     console.log("foodItems Get request failed");
        // });
        setFoodItems(mockData);

    }

    // const fetchBill=()=>{
    //     axios.post(`http://192.168.178.196:8080/home/${id}/abcd/bill`)
    //     .then((response)=>{
    //         if(response.data.table_number==id){
    //             setBill(response.data)
    //             console.log(response.data);
    //         }
    //         else("table id did'nt matched");
    //     })
    //     .catch(()=>{
    //         console.log("failed");
    //     })
    //     // setBill([]);
    // }


    // useEffect(()=>{
    //     const fetchDataInterval=setInterval(()=>{
    //         fetchBill();
    //     },2500);
    //     fetchBill();
    //     return()=>clearInterval(fetchDataInterval);
    // },[]);

    // useEffect(()=>{
    //     setIsBill(true);
    // },[bill])

    const fetchBillData=()=>{
        // axios.post(`http://192.168.178.196:8080/home/${id}/abc/bill`)
        // .then((response)=>{
        //     console.log(response.data);
        //     setBill(response.data);
        // })
        // .catch(()=>{
        //     console.log("allItems get request failed");
        // })
        setBill([]);

        // axios.get(`http://192.168.178.196:8080/home/${id}/abc/cart`)
        // .then((response)=>{
        //     console.log(response.data);
        //     setAllItems(response.data);
        // })
        // .catch(()=>{
        //     console.log("allItems get request failed");
        // })
        setAllItems([]);
    };

    useEffect(()=>{
        const fetchDataInterval=setInterval(()=>{
            fetchBillData();
        },2500);
        fetchBillData();
        return()=>clearInterval(fetchDataInterval);
    },[]);

    console.log(foodItems);
    console.log(offersList);
    
    if(offersList.length==0 || foodItems.length==0){
        return <LandingPageShimmerUI/>
    }

    console.log(bill);

    // if(bill.length!=0){
    //     setIsBill(true);
    // }

    return(
        <div className="landingPage-container">
            <Header/>
            <OffersSection offersList={offersList}/>
            <FoodTypeCardSection/>
            <FoodItemsSection foodItems={foodItems} setFoodItems={setFoodItems}/>
            <OrderedItemsPopUp allItems={allItems}/>
            {(bill.length!=0)?(
            <BillPage id={id} bill={bill} setBill={setBill} isBill={isBill} setIsBill={setIsBill}/>
            ):(null)}   
        </div>
    );
}

export default LandingPage;

