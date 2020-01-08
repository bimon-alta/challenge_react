import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerContact from '../Component/container-contact';


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

import { actions} from "../store";

class Contact extends React.Component{
    render() {
        this.props.setAsNewsPage(false);
        return (
            <div className='contact-body'>
                <Header />
                <ContainerContact />
            </div>            
        );
    }
}

// export default Contact;
export default connect("", actions)(withRouter(Contact));



    
