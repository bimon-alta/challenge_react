import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerAbout from '../Component/container-about';
import PageTitle from '../Component/page-title';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";

class About extends React.Component{
    render() {
        this.props.setAsNewsPage(false);
        return (
            <div className='about-body'>
                <Header />
                <PageTitle />
                <ContainerAbout />                    
                <Footer />
            </div>            
        );
    }
}

// export default About;
export default connect("", actions)(withRouter(About));



    

    

    