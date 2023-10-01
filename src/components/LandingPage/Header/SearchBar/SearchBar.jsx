const SearchBar=()=>{
    return(
        <div className="searchBar-container">
            <div className="background-img"></div>
            <div className="searchBox">
                <input placeholder="Search for your favrouite food" type="text"></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default SearchBar;