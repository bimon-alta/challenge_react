import React from 'react';
import '../css/article-view.css';
import axios from 'axios';


const apiKey = "1d0fea71b79f4e4dadb41ad8e441ded0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class NewsView extends React.Component{
    state = {
        newsList: [],
        isLoading: true
    };

    componentDidMount = () => {
        const self = this;

        //pakai get dgn params
        // .get(urlHeadline)
        axios
            .get('https://newsapi.org/v2/top-headLines?country=id&category=sport&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0')
            .then(function(response){
                self.setState({newsList: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });

    };

    render() {
        
        // const {newsList, isLoading} = this.state;

        // console.warn('newsList adalah :', this.state.newsList);

        const theNewsList = this.state.newsList.filter(item =>{
            if (item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });

        const hasil = theNewsList.map((item, index)=>{
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
        
        
        // <div>
        //     {/* {this.state.isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : hasil} */}
        // </div>

        // const hasil = <div>oke</div>  {theNewsList[0].urlToImage}  {theNewsList[0].description} {theNewsList[0].url}
        //{theNewsList[0].publishedAt} {theNewsList[0].author}

        return (
            <div className="col-md-7">
               {hasil} 
            </div>
            
        );
    }
}

export default NewsView;