import React from 'react';
import Header from '../Component/header';
import ContainerNews from '../Component/container-news';
import '../css/article.css';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions, getNewsListByCategory } from "../store";


class News extends React.Component{

    
    componentDidMount = async() => {
        // console.log("cek props di did mount", this.props)
        this.props.setAsNewsPage(true);

        this.props.getTopTenNewsList();
        await getNewsListByCategory(this.props.category);
        // console.log('cek state listNews', this.props.listNews)

    };



    handleRouterCategoryNews = categoryName => {
        // console.log("nilai setelah klik category", categoryName);
        this.props.history.replace("/news-category/" + categoryName);
        getNewsListByCategory(categoryName);
    };

    

    render() {
        return (
            // <div>
            //     {/* {console.log('Nilai State listNews ', this.props.listNews)} */}
            // </div>
            <div className='article-body'>
                <Header 
                    SearchClick={this.props.handleSearchClick}
                    handleRouterCategoryNews={e => this.handleRouterCategoryNews(e)}
                    isCategoryNews={true}
                    
                />
                <ContainerNews 
                    category={this.props.category} 
                    listNews={this.props.listNews} 
                    isLoading={this.props.isLoading} 
                    listTopTen={this.props.listTopTen}
                />
            </div>            
        );
    }
}

export default connect("category, listTopTen, listNews, isLoading", actions)(withRouter(News));




    

    

    