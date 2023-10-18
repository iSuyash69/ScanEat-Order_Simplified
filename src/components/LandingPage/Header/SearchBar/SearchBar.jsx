import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar=()=>{

    const [text,setText]=useState("");
    const handleSearch=()=>{
        axios.post(`http://192.168.1.136:8080/home/1`, { text })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Post request failed', error);
        });
    }

    useEffect(() => {
        handleSearch();
    }, [text]);

    return(
        <div className="searchBar-container">
            <div className="background-img"></div>
            <div className="searchBox">
                {/* <input placeholder="Search for your favrouite food" type="text"></input> */}
                <input type="text" placeholder="Enter name of Dish or Restraurant" value={text} onChange={(event)=>{setText(event.target.value)}}></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default SearchBar;