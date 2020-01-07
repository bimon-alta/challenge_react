import React from 'react';
import TopNewsList from './top-news-list';
import NewsView from './news-view';

class ContainerNews extends React.Component{

    render() {
        const {listNews, isLoading, category, listTopTen} = this.props;
        // const topHeadLines = listTopTen.filter(item =>{
        //     if (item.content !== null && item.urlToImage !== null){
        //         return item;
        //     }
        //     return false;
        // });
        return (
            <div className="container">
                <div className="row main-content">
                    {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : <TopNewsList listTopTen={listTopTen} />}
                    {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : <NewsView category={category} listNews={listNews} />}
                    
                        
                    
                    {/* <NewsView category={category} {...this.props}/>     */}

                </div>    
            </div>         
        );
    }
}

export default ContainerNews;