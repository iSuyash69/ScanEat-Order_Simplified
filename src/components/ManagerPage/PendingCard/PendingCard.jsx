const PendingCard=({card})=>{
    return(
        <div className="pending-item-card">
            <p style={{fontWeight:'500',fontSize:'16.5px',width:'100%',display:'flex',justifyContent:'center',background:'#007bff',height:'26px',alignItems:'center',color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>{'Table no 15'}</p>
            <div style={{display:'flex',flexDirection:'column',height:'130px',justifyContent:'center',gap:'1px',background:'',padding:'2.5px 0px'}}>
                <div style={{display:'flex',justifyContent:'space-between',padding:'0px 12px',fontSize:'14px'}}>
                    <p>Veg pulao</p>
                    <p>x6</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'0px 12px',fontSize:'14px'}}>
                    <p>Panner sabji</p>
                    <p>x2</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'0px 12px',fontSize:'14px'}}>
                    <p>Red Bull</p>
                    <p>x1</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'0px 12px',fontSize:'14px'}}>
                    <p>Red Bull</p>
                    <p>x1</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'0px 12px',fontSize:'14px'}}>
                    <p>Red Bull</p>
                    <p>x1</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'0px 10px',alignItems:'center',height:'29px',background:'blanchedalmond',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'4px'}}>
                    <i class="fa-solid fa-circle-check" style={{color:'green',fontSize:'17px'}}></i>
                    <p style={{fontSize:'14px',fontWeight:'400'}}>Accept</p>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'4px'}}>
                    <i class="fa-solid fa-circle-xmark" style={{color:'#ff0000',fontSize:'17px'}}></i>
                    <p style={{fontSize:'14px',fontWeight:'400'}}>Reject</p>
                </div>
            </div>
        </div>
    );
}

export default PendingCard;