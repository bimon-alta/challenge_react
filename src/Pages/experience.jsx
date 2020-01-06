import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerExperience from '../Component/container-experience';
import PageTitle from '../Component/page-title';

class Experience extends React.Component{
    render() {
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

export default Experience;


    

    

    