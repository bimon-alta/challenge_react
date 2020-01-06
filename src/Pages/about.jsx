import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerAbout from '../Component/container-about';
import PageTitle from '../Component/page-title';

class About extends React.Component{
    render() {
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

export default About;


    

    

    