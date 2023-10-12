import ReactDOM from "react-dom";
import { useEffect} from "react";
import "./MenuPopUpModal.css";
import { useNavigate } from "react-router-dom";

const MenuPopUpModal=({openMenuPopUp,setOpenMenuPopUp})=>{
  
    useEffect(()=>{overFlow();},[openMenuPopUp]);
    const navigate=useNavigate();

    const overFlow=()=>{
        if(openMenuPopUp==true){
        document.body.style.overflow="hidden";
        }
        else{
            document.body.style.overflow="scroll";
        };
    }

    if(openMenuPopUp==false){
        return null
    }

    const navigateHome=()=>{
        navigate("/home");
    }

    return ReactDOM.createPortal(
        <div className={`menu-popup-modal-main-container`}>
            <div className="menu-popup-modal-sub-container">
                <i className="fa-solid fa-x close-pop-up" onClick={()=>{setOpenMenuPopUp(false)}}></i>
                <div>
                    <h2 onClick={navigateHome}>Home</h2>
                    <h2>Cart</h2>
                    <h2>Food Catagories</h2>
                    <h2>Recommended items</h2>
                    <h2>About Us</h2>
                </div>  
            </div>
        </div>,
        document.querySelector(".portal")
    );
}

export default MenuPopUpModal;