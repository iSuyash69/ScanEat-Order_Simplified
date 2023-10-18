import axios from "axios";
import { useEffect,useState } from "react";
import PendingCard from "./PendingCard/PendingCard";
import managerData from "/managerData.json";

const ManagerPage=()=>{

    const [orders,setOrders]=useState([]);

    const fetchData = () => {
        // axios.get('http://192.168.1.136:8080/managers')
        //   .then((response) => { 
        //     console.log(response.data);
        //   })
        //   .catch(()=>{
        //     console.log("Request failed");
        //   });

            setOrders(managerData);
      };

    useEffect(()=>{
        const fetchDataInterval=setInterval(()=>{
            fetchData();
        },2500);
        fetchData();
        return()=>clearInterval(fetchDataInterval);
    },[]);

    return(
        <div className="manager-page-main-container">
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Pending</h3>
                <div className="manager-card-container">
                    {orders.map((card,index)=>{
                        return <PendingCard card={card} key={index}/>
                    })}
                </div>
            </div>
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Preparing</h3>
                <div className="manager-card-container">
                    hello
                </div>
            </div>
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Delivered</h3>
                <div className="manager-card-container">
                    hello
                </div>
            </div>
        </div>
    )
}

export default ManagerPage;