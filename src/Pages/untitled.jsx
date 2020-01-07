import React from 'react';

const apiKey = "1d0fea71b79f4e4dadb41ad8e441ded0";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id&apiKey" + apiKey;

class News extends React.Component{
    state = {
        listNews: [],
        isLoading: true
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response){
                self.setState({listNews: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                self.setState({isLoading:false});
            });
    };

    render() {
        const {listNews, isLoading} = this.state;
        
        const topHeadLines = listNews.filter(item =>{
            if (item.content !== null && item.image !== null){
                return item;
            }
            return false;
        });

        const headLineNews = topHeadLines.map((item, key) => {
            return (
                <ListNews 
                    key = {key}
                    title= {item.title}
                    image= {item.urlToImage}
                    content= {item.description}
                    url= {item.url}
                />
            );
        });

        return(
            <div className="headLineNews">
                {isLoading ? <div style={{ textAlign: "center"}}> Loading...</div>: headLineNews}
            </div>
        );

    }

}

export default News;