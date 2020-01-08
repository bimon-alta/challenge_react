import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import SectionHome from '../Component/section-home';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";

class Home extends React.Component{
    render() {
        this.props.setAsNewsPage(false);
        return (
            <div className='index-body'>
                <Header />
                <SectionHome />
                <Footer />
            </div>            
        );
    }
}

// export default Home;
export default connect("", actions)(withRouter(Home));
