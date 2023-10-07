import "../FoodTypeCardSection.css"

const FoodTypeCard=()=>{

    const link="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/";

    return(
        <div className="food-type-card">
            <img src={link+"PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"}alt="img1"/>
            <img src={link+"v1675667625/PC_Creative%20refresh/North_Indian_4.png"}alt="img2"/>
            <img src={link+"v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png"}alt="img3"/>
            <img src={link+"v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"}alt="img4"/>
            <img src={link+"v1675667625/PC_Creative%20refresh/Biryani_2.png"}alt="img5"/>
            <img src={link+"v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"}alt="img6"/>
            <img src={link+"v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png"}alt="img7"/>
            <img src={link+"v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png"}alt="img8"/>
            <img src={link+"v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"}alt="img9"/>
            <img src={link+"v1675667626/PC_Creative%20refresh/South_Indian_4.png"}alt="img10"/>
        </div>
    );
}

export default FoodTypeCard;