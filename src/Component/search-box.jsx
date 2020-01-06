import React from 'react';

class SearchBox extends React.Component{
    render() {
        return (
            <div>
                <input type="text" placeholder="Search.." />
                <button type="button" class="btn btn-primary">
                    Search
                </button>
            </div>
        );
    }
}

export default SearchBox;


    

    

    