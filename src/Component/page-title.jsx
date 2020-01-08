import React from 'react';

// class PageTitle extends React.Component{
const PageTitle = props => {
    // console.log("nilai pageTitle", props.pageTitle);
    return (
        <div className="container-fluid page-title-background">
            <div className="container page-title">
                <h1>{props.pageTitle}</h1>   
            </div>          
        </div>
    );

}

export default PageTitle;