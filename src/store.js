import createStore from "unistore";
import axios from 'axios';

const allState = {
    listNews: [],
    listTopTen: [],
    isLoading: true,
    isOnNewsPage: true,

    category: 'sport',
    searchWord: '',
    user_credential: {
        user_name: '',
        email: '',
        api_key: '1d0fea71b79f4e4dadb41ad8e441ded0',
        is_login: false
    },
    apiKey : "1d0fea71b79f4e4dadb41ad8e441ded0",
    urlHeadline: "https://newsapi.org/v2/top-headlines?country=id&apiKey=",
    urlNewsBySearch: "https://newsapi.org/v2/everything?q=",
    urlNewsCategory: "https://newsapi.org/v2/top-headlines?country=id&category="
};


export const store = createStore(allState);

export const actions = store => ({
    
    setAsNewsPage: async (state, isTrue) =>{
        store.setState({isOnNewsPage: isTrue});
    },

    getTopTenNewsList: async (state) =>{
        
        await axios
            .get(state.urlHeadline+state.user_credential.api_key)
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

    // changeInput: (state, e) => {
    //     store.setState({ [e.target.name]: e.target.value });
    // },

    storeHandleLogin: async() => {

        await axios
        .post("https://bimon.free.beeceptor.com/auth", "")
        .then(function (response) {
            if (response.data.hasOwnProperty("api_key")) {
                // console.log("nilai api_key", response.data.api_key);

                store.setState({
                    user_credential: {
                        user_name: response.data.name, 
                        email: response.data.email,
                        api_key: response.data.api_key,
                        is_login: true
                    }
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    storeHandleLogout: () => {
        // console.log("logout berhasil jalan");
        store.setState({
            user_credential: {
                user_name: "", 
                email: "",
                is_login: false
            }
        });
        
    },

    


});


const getNewsListBySearch = async searchKey => {
    await axios
        .get(allState.urlNewsBySearch+searchKey +'&apiKey='+ allState.user_credential.api_key)
        .then(function(response){
            store.setState({listNews: response.data.articles, isLoading:false});
        })
        .catch(function(error){
            store.setState({isLoading:false});
        });

}

export const getNewsListByCategory = async (category) =>{
    await axios
        .get(allState.urlNewsCategory +category +'&apiKey='+ allState.user_credential.api_key)
        .then(function(response){
            store.setState({listNews: response.data.articles, isLoading:false});
            
        })
        .catch(function(error){
            store.setState({isLoading:false});
        });
}