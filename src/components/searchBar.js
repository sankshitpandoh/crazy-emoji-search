import React from 'react';
import '../stylesheets/searchBar.css';

class SearchBar extends React.Component{
    state = {
        searchInput : ""
    }

    handleSearchValue = (e) => {
        this.setState({
            searchInput: e.target.value
        }, () => {
            console.log(this.state.searchInput)
        })
    }

    render(){
        return(
            <div className = "search-bar-container">
                <h2>🔥 Crazy Emoji Search 🔥</h2>
                <input placeholder="Search here" type="text" value={this.state.searchInput} onChange={this.handleSearchValue} />
            </div>
        )
    }
}

export default SearchBar;