import React from 'react';
import '../css/article-view.css';



class NewsView extends React.Component{
    
    

    render() {
        
        // this.props.listNews;

        const theNewsList = this.props.listNews.filter(item =>{
            if (item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });

        const hasil = theNewsList.map( item =>{
			return (
				
				<div className="article-container">
                    <img className="article-image" src={item.urlToImage} />
                    <div className="article-title">
                        {item.title}
                    </div>
                    <div className="article-short-desc">
                        <p>{item.description}</p>
                        
                        <a href={item.url} className="article-read-more">Read More</a>

                    </div>
                    <div className="article-info">
                        <span className="article-created-at">{item.publishedAt}</span>
                        <span className="article-publisher">{item.author}</span>
                    </div>
                    <div className="article-button-footer">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <a href="" className="article-button"><i className="fa fa-heart-o"></i></a>
                        <a href="" className="article-button"><i className="fa fa-share-alt"></i></a>
                        <a href="" className="article-button"><i className="fa fa-thumbs-o-down"></i></a>                            
                    </div>
                </div>
			)
        });
        
        

        return (
            <div className="col-md-7">
               {hasil} 
            </div>
            
        );
    }
}

export default NewsView;