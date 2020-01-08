import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerExperience from '../Component/container-experience';
import PageTitle from '../Component/page-title';

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";

class Experience extends React.Component{
    render() {
        this.props.setAsNewsPage(false);
        return (
            <div className='experience-body'>
                <Header />
                <PageTitle />
                <ContainerExperience />                    
                <Footer />
            </div>            
        );
    }
}

// export default Experience;
export default connect("", actions)(withRouter(Experience));



    

    

    