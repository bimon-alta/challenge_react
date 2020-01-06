import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import ContainerContact from '../Component/container-contact';

class Contact extends React.Component{
    render() {
        return (
            <div className='contact-body'>
                <Header />
                <ContainerContact />
            </div>            
        );
    }
}

export default Contact;


    
