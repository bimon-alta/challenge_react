import React from 'react';
import '../css/search-box.css';

class SearchBox extends React.Component{
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <input type="text" placeholder="Search.." onChange={e => this.props.SearchClick(e)}/>
                {/* <button className="btn search-btn" onClick={this.props.onSearchClick}><i className="fa fa-search"></i></button> */}
                {/* <button className="btn search-btn" >Find</button> */}

            </div>
        );
    }
}

export default SearchBox;


    

    

    