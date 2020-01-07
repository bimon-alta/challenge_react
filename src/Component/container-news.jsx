import React from 'react';
import TopNewsList from './top-news-list';
import NewsView from './news-view';
import axios from 'axios';

const apiKey = "1d0fea71b79f4e4dadb41ad8e441ded0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class ContainerNews extends React.Component{

    state = {
        listNews: [],
        // mainNew: {},
        isLoading: true,
        category: 'sport'
    };

    //Bikin fungsi yg ada malah GAGAL
    // getLocalNewList = () => {
    //     let dataAxios
    //     axios
    //         .get(urlHeadline)
    //         .then(function(response){
    //             console.warn("cek hasil axios", response.data.articles);
    //             dataAxios= response.data.articles
    //             console.warn("cek setelah di assign ulang", dataAxios);
                
                
    //             return dataAxios;
    //         })
    //         .catch(function(error){
    //             return null;
    //         });
    // };

    // componentDidMount = async () => {
    componentDidMount = async () => {

        const self = this;

        //pakai get dgn params
        // get(`https://newsapi.org/v2/top-headLines?country=id&category=${this.state.category}`);
        axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({listNews: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });


        //Bikin fungsi yg ada malah GAGAL
        // const localNewList = await this.getLocalNewList();
        // console.warn("cek localnew list",localNewList);
        
        // if (localNewList != null){
        //     self.setState({listNews: localNewList, isLoading:false});
        // }else{
        //     self.setState({isLoading:false});

        // }

        
        
    };


    render() {
        const {listNews, isLoading} = this.state;
        
        const topHeadLines = listNews.filter(item =>{
            if (item.content !== null && item.urlToImage !== null){
                return item;
            }
            return false;
        });

        return (
            <div className="container">
                <div className="row main-content">
                    {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div> : <TopNewsList topHeadLines={topHeadLines} />}
                    <NewsView category={this.state.category}/>    
                </div>    
            </div>         
        );
    }
}

export default ContainerNews;