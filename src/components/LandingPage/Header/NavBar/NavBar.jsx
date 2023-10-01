import logo from "/assets/images/Logo.png";
import qrCode from "/assets/images/qrcode.png";

const NavBar=()=>{
    return(
        <div className="navBar-container">
            <div className="navBar-sub-container">
                <div className="logo">
                    <img src={logo} alt="error"></img>
                    <h2>Sc<img src={qrCode}></img>n<span>Eat</span></h2>
                </div>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}

export default NavBar;