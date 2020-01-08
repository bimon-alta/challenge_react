import React from 'react';
import Header from '../Component/header';
import ContainerNews from '../Component/container-news';
import '../css/article.css';
import axios from 'axios';

const apiKey = "1d0fea71b79f4e4dadb41ad8e441ded0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class News extends React.Component{
    state = {
        listNews: [],
        listTopTen: [],
        isLoading: true,
        category: 'sport',
        searchWord: ''
    };
    
    componentDidMount = async () => {

        // const self = this;

        // axios
        //     .get(urlHeadline)
        //     .then(function(response){
        //         self.setState({listNews: response.data.articles, isLoading:false});
        //     })
        //     .catch(function(error){
        //         self.setState({isLoading:false});
        //     });

        this.getTopTenNewsList();
        this.getNewsListByCategory(this.state.category)
    };

    getNewsListBySearch = async(searchKey) =>{
        const self = this;
        // console.log('Kata pencarian ', searchKey);
        await axios
            .get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${apiKey}`)
            .then(function(response){
                self.setState({listNews: response.data.articles, isLoading:false});
                // console.log('Nilai State listNews ', self.state.listNews);
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });

    }

    getTopTenNewsList = async () =>{
        const self = this;
        
        await axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({listTopTen: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });

    }

    getNewsListByCategory = async(category) =>{
        const self = this;
        
        await axios
            .get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0`)
            .then(function(response){
                self.setState({listNews: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });
        // console.log('daftar list', self.state.listNews);
    }


    handleSearchClick = async (el) =>{
        const theVal = el.target.value;
        await this.setState({searchWord: theVal});
        // console.log('Nilai searchbox on change: ', theVal);
        // console.log('Nilai state searchWord', this.state.searchWord);
        
        if (theVal.length > 2) { 
            this.getNewsListBySearch(theVal);
        }

        
    }

    handleRouterCategoryNews = categoryName => {
        // console.log("nilai setelah klik category", categoryName);
        const category = categoryName;
        this.props.history.replace("/news-category/" + category);
        this.getNewsListByCategory(category);
    };

    

    render() {
        return (
            <div className='article-body'>
                <Header 
                    SearchClick={this.handleSearchClick}
                    handleRouter={e => this.handleRouterCategoryNews(e)}
                    isCategoryNews={true}
                    
                />
                <ContainerNews 
                    searchWord={this.state.searchWord} 
                    category={this.state.category} 
                    listNews={this.state.listNews} 
                    isLoading={this.state.isLoading} 
                    listTopTen={this.state.listTopTen}
                />
            </div>            
        );
    }
}

export default News;


    

    

    