import React from 'react';
import TopArticleList from './top-article-list';
import ArticleView from './article-view';

class ContainerArticle extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row main-content">
                    <TopArticleList />
                    <ArticleView />    
                </div>    
            </div>         
        );
    }
}

export default ContainerArticle;