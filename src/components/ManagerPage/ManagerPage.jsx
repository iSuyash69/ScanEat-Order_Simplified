import axios from "axios";
import { useEffect,useState } from "react";
import PendingCard from "./PendingCard/PendingCard";
import managerData from "/src/managerData.json";
import PreparingCard from "./PreparingCard/PreparingCard";
import DeliveredCard from "./DeliveredCard/DeliveredCard";
import PaidCard from "./PaidCard/PaidCard";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BillGenCard from "./BillGenCard/BillGenCard";

const ManagerPage=()=>{

    const [orders,setOrders]=useState([]);
    const [groupedData,setGroupedData]=useState({});
    const [notification,setNotification]=useState('');

    const fetchData = () => {
        axios.get('http://192.168.178.196:8080/managers')
          .then((response) => { 
            console.log(response.data);
            setOrders(response.data);
          })
          .catch(()=>{
            console.log("Request failed");
          });
            // setOrders(managerData);

            axios.get('http://192.168.178.196:8080/manager/bill')
            .then((response)=>{
              console.log(response.data);
              setNotification(response.data)
            })
            .catch(()=>{
              console.log('notification get request failed')
            })
      };

    useEffect(()=>{
        const fetchDataInterval=setInterval(()=>{
            fetchData();
        },2000);
        fetchData();
        return()=>clearInterval(fetchDataInterval);
    },[]);

    useEffect(()=>{
        // notification.map((item,index)=>{
          if(notification!==''){
          toast.info(`Bill Requested by Table ${notification}`,{autoClose:false,onClose:()=>{console.log('Notification closed');}});
          }
        // })
    },[notification])

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

      // -------------filtering pendingData--------------- 
      
      const pendingData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId].filter(item => item.status === "pending")
      }));

      // -------------filtering preparingData--------------- 

      const preparingData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId].filter(item => item.status === "preparing")
      }));

      // -------------filtering deliveredData--------------- 

      const deliveredData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId].filter(item => item.status === "delivered")
      }));

      const deliveredTableData = {};

    deliveredData.forEach(order => {
      order.orders.forEach(item => {
        const { table_number } = item;
        if (!deliveredTableData[table_number]) {
            deliveredTableData[table_number] = [];
        }
        deliveredTableData[table_number].push(item);
      });
    });

    const deliveredTableArray = Object.keys(deliveredTableData).map(tableNumber => ({
      table_number: tableNumber,
      orders: deliveredTableData[tableNumber]
    }));

    // -------------filtering paidData--------------- 

      const paidData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId].filter(item => item.status === "justpaid")
      }));

      const paidTableData = {};

      paidData.forEach(order => {
        order.orders.forEach(item => {
          const { table_number } = item;
          if (!paidTableData[table_number]) {
            paidTableData[table_number] = [];
          }
          paidTableData[table_number].push(item);
        });
      });
  
      const paidTableArray = Object.keys(paidTableData).map(tableNumber => ({
        table_number: tableNumber,
        orders: paidTableData[tableNumber]
      }));

      // --------------filtering billGen-----------------

      const billGenData = Object.keys(groupedData).map(orderId => ({
        order_id: orderId,
        orders: groupedData[orderId].filter(item => item.status === "billGen")
      }));

      const billGenTableData = {};

      billGenData.forEach(order => {
        order.orders.forEach(item => {
          const { table_number } = item;
          if (!billGenTableData[table_number]) {
            billGenTableData[table_number] = [];
          }
          billGenTableData[table_number].push(item);
        });
      });
  
      const billGenArray = Object.keys(billGenTableData).map(tableNumber => ({
        table_number: tableNumber,
        orders: billGenTableData[tableNumber]
      }));

    
      console.log(orders);
      console.log(pendingData);
      console.log(preparingData);
      console.log(deliveredTableArray);
      console.log(paidTableArray);

      // const handleStatusChange = (order_id) => {
      //   const updatedData = [...orders];
      //   const intOrderID = parseInt(order_id, 10); 
      //   updatedData.forEach((item) => {
      //       if (item.order_id === intOrderID) {
      //         item.status = "preparing";
      //       }
      //     });
      //     setOrders(updatedData);
      // };


      const handleStatusChange = (order_id) => {

        const intOrderID = parseInt(order_id, 10);

        axios.put('http://192.168.178.196:8080/managers', { order_id: intOrderID})
          .then((response) => {
            console.log('success');
          })
          .catch((error) => {
            console.error('PUT request error:', error);
          });
      };


    return(
        <div className="manager-page-main-container">
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Pending</h3>
                <div className="manager-card-container">
                    {pendingData.map((card,index)=>{
                       return  (card.orders.length!=0)?(
                         <PendingCard card={card} key={index} handleStatusChange={handleStatusChange}/>
                        ):(null);
                    })}
                </div>
            </div>
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Preparing</h3>
                <div className="manager-card-container">
                    {preparingData.map((card,index)=>{
                       return  (card.orders.length!=0)?(
                         <PreparingCard card={card} key={index}/>
                        ):(null);
                    })}
                </div>
            </div>
            <div className="manager-card-main-container">
                <h3 className="manager-card-title">Delivered</h3>
                <div className="manager-card-container">
                    {deliveredTableArray.map((card,index)=>{
                       return  (card.orders.length!=0)?(
                         <DeliveredCard card={card} key={index}/>
                        ):(null);
                    })}
                    {billGenArray.map((card,index)=>{
                       return  (card.orders.length!=0)?(
                         <BillGenCard card={card} key={index}/>
                        ):(null);
                    })}
                    {paidTableArray.map((card,index)=>{
                       return  (card.orders.length!=0)?(
                         <PaidCard card={card} key={index}/>
                        ):(null);
                    })}
                </div>
            </div>
            <ToastContainer limit={3}/>
        </div>
    )
}

export default ManagerPage;