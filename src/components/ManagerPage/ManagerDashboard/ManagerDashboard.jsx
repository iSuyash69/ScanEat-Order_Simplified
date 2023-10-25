import { useEffect, useState } from "react";
import "./ManagerDashboard.css"
import axios from "axios";

const ManagerDashboard=()=>{

    const [type,setType]=useState('daily');
    const [foodData,setFoodData]=useState([]); 

    const dailyClickHandle=()=>{
        console.log('daily');
        setType('daily');
    }

    const monthlyClickHandle=()=>{
        console.log('weekly');
        setType('weekly');
    }

    const weeklyClickHandle=()=>{
        console.log('monthly');
        setType('monthly');
    }

    useEffect(()=>{fetchData()},[type]);

    const fetchData=()=>{
            axios.post('http://8080',{type:type})
            .then((response)=>{
                setFoodData(response.data);   
                console.log(response.data);
            })
            .catch(()=>{
                console.log(`${type} request failed`)
            })
    }
    

    return(
        <div className="manager-dashboard-main-container" style={{flexDirection:'column'}}>
            <div style={{marginTop:'5px',marginLeft:'14px'}}>
                <h3>Dashboard</h3>
            </div>
            <div style={{background:'',display:'flex',width:'100%',paddingLeft:'15px',marginTop:'10px',flexDirection:'column'}}>
                <div style={{display:'flex',gap:'10px'}}>
                    <button onClick={dailyClickHandle}>Daily</button>
                    <button onClick={weeklyClickHandle}>Weekly</button>
                    <button onClick={monthlyClickHandle}>Monthly</button>
                </div>
                <div style={{display:'flex',gap:'0px',width:'100%',justifyContent:'space-evenly',marginTop:'10px'}}>
                <div style={{display:'flex',marginTop:'10px',marginLeft:'0px',background:'#2D2D2D',minWidth:'470px',padding:'20px 20px',flexDirection:'',borderRadius:'20px',height:'250px'}}>
                    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <h4 style={{color:'white',fontSize:'15px',fontWeight:'500'}}>Top 5 food Items  - {type}</h4>
                        <div style={{color:'white',display:'flex',flexDirection:'column',gap:'5px',paddingLeft:'10px'}}>
                            {foodData.map((item,index)=>{
                                return <p key={index}>{item.name}</p>
                            })}
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'10px',marginLeft:'0px',background:'#2D2D2D',minWidth:'470px',padding:'20px 20px',flexDirection:'',borderRadius:'20px',height:'250px'}}>
                    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <h4 style={{color:'white',fontSize:'15px',fontWeight:'500'}}>Top 5 food Items  - {type}</h4>
                        <div style={{color:'white',display:'flex',flexDirection:'column',gap:'5px',paddingLeft:'10px'}}>
                            <p>1.Burger</p>
                            <p>2.Pizza</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'10px',marginLeft:'0px',background:'#2D2D2D',minWidth:'470px',padding:'20px 20px',flexDirection:'',borderRadius:'20px',height:'250px'}}>
                    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <h4 style={{color:'white',fontSize:'15px',fontWeight:'500'}}>Top 5 food Items  - {type}</h4>
                        <div style={{color:'white',display:'flex',flexDirection:'column',gap:'5px',paddingLeft:'10px'}}>
                            <p>1.Burger</p>
                            <p>2.Pizza</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                        </div>
                    </div>
                </div>
                </div>
                <div style={{display:'flex',gap:'30px',width:'100%',justifyContent:'center',marginTop:'10px'}}>
                <div style={{display:'flex',marginTop:'10px',marginLeft:'0px',background:'#2D2D2D',minWidth:'550px',padding:'20px 20px',flexDirection:'',borderRadius:'25px',height:'300px'}}>
                    <div style={{position:'relative',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <h4 style={{color:'white',fontSize:'15px',fontWeight:'500'}}>Top 5 Tables  - {type}</h4>
                        <div style={{color:'white',display:'flex',flexDirection:'column',gap:'5px',paddingLeft:'10px',width:'500px'}}>
                            <div style={{width:'164px',marginTop:'35px',background:'#EE4037',height:'164px',borderRadius:'50%',zIndex:'5',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'22px',fontWeight:'500'}}>10</div>
                            <div style={{position:'absolute',left:'140',top:'30',width:'130px',background:'#9D2062',height:'130px',borderRadius:'50%',zIndex:'4',fontSize:'22px',fontWeight:'500'}}><span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%'}}>7</span></div>
                            <div style={{position:'absolute',right:'110',top:'130',width:'115px',background:'#652F8D',height:'115px',borderRadius:'50%',zIndex:'3',fontSize:'20px',fontWeight:'500'}}><span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%'}}>3</span></div>
                            <div style={{position:'absolute',bottom:'0',right:'230',width:'90px',background:'#F59121',height:'90px',borderRadius:'50%',zIndex:'2',fontSize:'18px',fontWeight:'500'}}><span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%'}}>9</span></div>
                            <div style={{position:'absolute',top:'90',right:'90',width:'70px',background:'green',height:'70px',borderRadius:'50%',zIndex:'1',fontSize:'16px',fontWeight:'500'}}><span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%'}}>11</span></div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',marginTop:'10px',marginLeft:'0px',background:'#2D2D2D',minWidth:'550px',padding:'20px 20px',flexDirection:'',borderRadius:'25px'}}>
                    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                        <h4 style={{color:'white',fontSize:'15px',fontWeight:'500'}}>Top 5 Tables  - {type}</h4>
                        <div style={{color:'white',display:'flex',flexDirection:'column',gap:'5px',paddingLeft:'10px'}}>
                            <p>1.Burger</p>
                            <p>2.Pizza</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                            <p>3.Sandwich</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerDashboard;