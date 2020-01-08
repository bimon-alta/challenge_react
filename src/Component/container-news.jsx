import React from 'react';
import TopNewsList from './top-news-list';
import NewsView from './news-view';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions } from "../store";

class ContainerNews extends React.Component{

    render() {
        const {listNews, isLoading, category, listTopTen} = this.props;
        return (
            <div className="container">
                <div className="row main-content">
                    {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : <TopNewsList listTopTen={listTopTen} />}
                    {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : <NewsView category={category} listNews={listNews} />}
                    
                </div>    
            </div>         
        );
    }
}

export default ContainerNews;