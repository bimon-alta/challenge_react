import createStore from "unistore";
import axios from 'axios';

const allState = {
    listNews: [],
    listTopTen: [],
    isLoading: true,

    category: 'sport',
    searchWord: '',
    user_credential: {
        "user_name": '',
        "email": '',
        "api-key": '',
        "is_login": false
    },
    apiKey : "1d0fea71b79f4e4dadb41ad8e441ded0",
    baseUrl : "https://newsapi.org/v2/"
    
};

const urlHeadline = allState.baseUrl + "top-headlines?country=id&apiKey=" + allState.apiKey;

export const store = createStore(allState);

export const actions = store => ({
    // getNewsListBySearch: async(state, searchKey) => {
    //     await axios
    //         // .get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${apiKey}`)
    //         .get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0`)
    //         .then(function(response){
    //             store.setState({listNews: response.data.articles, isLoading:false});
    //         })
    //         .catch(function(error){
    //             store.setState({isLoading:false});
    //         });

    // },

    getTopTenNewsList: async () =>{
        
        await axios
            .get(urlHeadline)
            .then(function(response){
                store.setState({listTopTen: response.data.articles, isLoading:false});
            })
            .catch(function(error){
                store.setState({isLoading:false});
            });

    },

    handleSearchClick: async (state, el) =>{
        const theVal = el.target.value;
        await store.setState({searchWord: theVal});
        // console.log('Nilai searchbox on change: ', theVal);
        // console.log('Nilai state searchWord', this.state.searchWord);
        
        if (theVal.length > 2) { 
            getNewsListBySearch(theVal);
        }

        
    },

    changeInput: (state,e) => {
        this.setState({ [e.target.name]: e.target.value });
    },

    handleLogin: () => {
        
        const data = {
          username: userName,
          password: userPassword
        };
        axios
        .post("https://bimon.free.beeceptor.com/auth", data)
        .then(function (response) {
            console.log(response.data);
            if (response.data.hasOwnProperty("api-key")) {
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("email", response.data.email);
                localStorage.setItem("api-key", response.data.api_key);
                localStorage.setItem("is_login", true);
                
                self.props.history.push("/profile");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    // getNewsListByCategory: async(state, category)=>{
    //     await axios
    //         .get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0`)
    //         .then(function(response){
    //             store.setState({listNews: response.data.articles, isLoading:false});
                
    //         })
    //         .catch(function(error){
    //             store.setState({isLoading:false});
    //         });
    //     // console.log('Nilai State listNews ', state.listNews); //ketika dilog disini masih kosong
    // },


});


const getNewsListBySearch = async searchKey => {
    await axios
        // .get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=${apiKey}`)
        .get(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0`)
        .then(function(response){
            store.setState({listNews: response.data.articles, isLoading:false});
        })
        .catch(function(error){
            store.setState({isLoading:false});
        });

}

export const getNewsListByCategory = async (category) =>{
    await axios
        .get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=1d0fea71b79f4e4dadb41ad8e441ded0`)
        .then(function(response){
            store.setState({listNews: response.data.articles, isLoading:false});
            
        })
        .catch(function(error){
            store.setState({isLoading:false});
        });
}