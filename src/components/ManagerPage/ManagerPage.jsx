import axios from "axios";
import { useEffect,useState } from "react";
import PendingCard from "./PendingCard/PendingCard";

const ManagerPage=()=>{

    const [Pending,setPending]=useState([]);

    const fetchData = () => {
        axios.get('http://localhost:8080/posts')
          .then((response) => {
            setPending(response.data.data);
            console.log(response.data.data);

          })
          .catch(()=>{
            console.log("Request failed");
          });
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
                    {Pending.map((card,index)=>{
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