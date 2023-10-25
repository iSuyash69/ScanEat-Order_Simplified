import { useState,useEffect } from "react";
import chefData from "/src/ChefData.json";
import ChefPreparingCard from "./ChefPreparingCard/ChefPreparingCard";
import axios from "axios";
import "./chefPage.css"

const ChefPage=()=>{

    const [orders,setOrders]=useState([]);
    const [instructions,setInstructions]=useState([]);
    const [groupedData,setGroupedData]=useState({});

    const fetchData = () => {
        axios.get('http://192.168.178.196:8080/chef')
          .then((response) => { 
            console.log(response.data.order);
            setOrders(response.data);
            // setInstructions(response.data.instructions)
          })
          .catch(()=>{
            console.log("Request failed");
          });
            // setOrders(chefData.order);
            // setInstructions(chefData.instructions)
      };

    useEffect(()=>{
        const fetchDataInterval=setInterval(()=>{
            fetchData();
        },1500);
        fetchData();
        return()=>clearInterval(fetchDataInterval);
    },[]);

    useEffect(() => {
        const organizedData = orders.reduce((acc, currentItem) => {
          const { order_id } = currentItem;
    
          if (!acc[order_id]) {
            acc[order_id] = [];
          }
    
          acc[order_id].push(currentItem);
    
          return acc;
        }, {});
    
        setGroupedData(organizedData);
      }, [orders]);

      const arrayData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId]
      }));

    console.log(orders); 
    console.log(instructions) 

    const handleStatusChange = (order_id) => {

      const intOrderID = parseInt(order_id, 10);

      axios.put('http://192.168.178.196:8080/chef', { order_id: intOrderID})
        .then((response) => {
          console.log('success');
        })
        .catch((error) => {
          console.error('PUT request error:', error);
        });
    };

   
    

    return(
        <div style={{zIndex:'1000',position:'relative',background:'white',width:"100%",height:'100vh'}}>
            <div style={{width:'100%',background:'#f1f1f6'}}>
                <h3 style={{fontSize:'17px',fontWeight:'500',paddingLeft:'10px'}}>Preparing</h3>
                <div style={{width:'100%',height:'calc(100vh - 28px)',background:'white',display:'flex',flexWrap:'wrap',gap:'25px',paddingTop:'15px',paddingLeft:'20px',alignContent:'flex-start'}}>
                    {arrayData.map((card,index)=>{
                       return  (card.length!=0)?(
                         <ChefPreparingCard card={card} key={index} handleStatusChange={handleStatusChange}/>
                        ):(null);
                    })}
                </div>
            </div>
        </div>
    );

}

export default ChefPage;