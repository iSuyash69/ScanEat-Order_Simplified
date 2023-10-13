import { Link } from "react-router-dom";
import "../FoodTypeCardSection.css";

const FoodTypeCard=()=>{

    const link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/";

    return(
        <div className="food-type-card">
            <Link to={"/subCategory/chinesse"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img1"/></Link>
            <Link to={"/subCategory/rice"}><img src={link+"v1675667625/PC_Creative%20refresh/North_Indian_4.png"} alt="img2"/></Link>
            <Link to={"/subCategory/TIkka"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img3"/></Link>
            <Link to={"/subCategory/chicken"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img4"/></Link>
            <Link to={"/subCategory/soup"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img5"/></Link>
            <Link to={"/subCategory/Curry"}><img src={link+"PC_Creative%20refresh/North_Indian_4.png"} alt="img6"/></Link>
            <Link to={"/subCategory/Sandwich"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img7"/></Link>
            <Link to={"/subCategory/Dessert"}><img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"} alt="img8"/></Link>
        </div>
    );
}

export default FoodTypeCard;