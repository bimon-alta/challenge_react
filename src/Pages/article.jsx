import React from 'react';
import Header from '../Component/header';
import ContainerArticle from '../Component/container-article';
import '../css/article.css';

class Article extends React.Component{
    render() {
        return (
            <div className='article-body'>
                <Header />
                <ContainerArticle />                    
            </div>            
        );
    }
}

export default Article;


    

    

    