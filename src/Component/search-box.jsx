import React from 'react';
import '../css/search-box.css';

class SearchBox extends React.Component{
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <input type="text" placeholder="Search.." />
                <button class="btn search-btn"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}

export default SearchBox;


    

    

    