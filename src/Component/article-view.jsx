import React from 'react';
import '../css/article-view.css';

class ArticleView extends React.Component{
    render() {
        return (
            <div className="col-md-7">
                <div className="article-container">
                    <img className="article-image" src="https://image.shutterstock.com/image-photo/bussiness-man-work-office-career-260nw-1022589949.jpg" />
                    <div className="article-title">
                        Title Of Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div className="article-short-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. 
                        </p>
                        <a href="" className="article-read-more">Read More</a>

                    </div>
                    <div className="article-info">
                        <span className="article-created-at">06 Jan 2020 03.45 PM</span>
                        <span className="article-publisher">By Sumanto</span>
                    </div>
                    <div className="article-button-footer">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <a href="" className="article-button"><i class="fa fa-heart-o"></i></a>
                        <a href="" className="article-button"><i class="fa fa-share-alt"></i></a>
                        <a href="" className="article-button"><i class="fa fa-thumbs-o-down"></i></a>                            
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleView;