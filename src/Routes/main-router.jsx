import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


import Home from '../Pages/home';
import About from '../Pages/about';
import News from '../Pages/news';
import Contact from '../Pages/contact';
import Experience from '../Pages/experience';
import Login from '../Pages/login';
import Profile from '../Pages/profile';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={News} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/experience" component={Experience} />
                {/* <Route exact path="/news" component={News} /> */}
                <Route path="/news-category/:category" component={News} />
                {/* <Route component=NotMatch /> */}

            </Switch>
        </BrowserRouter>
    );
};

export default MainRouter;