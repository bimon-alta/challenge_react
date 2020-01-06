import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import SectionHome from '../Component/section-home';

class Home extends React.Component{
    render() {
        return (
            <div className='index-body'>
                <Header />
                <SectionHome />
                <Footer />
            </div>            
        );
    }
}

export default Home;
