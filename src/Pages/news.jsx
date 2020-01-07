import React from 'react';
import Header from '../Component/header';
import ContainerNews from '../Component/container-news';
import '../css/article.css';




class News extends React.Component{
    render() {
        return (
            <div className='article-body'>
                <Header />
                <ContainerNews />
            </div>            
        );
    }
}

export default News;


    

    

    