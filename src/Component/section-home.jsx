import React from 'react';

class SectionHome extends React.Component{
    render () {
        return(
            <section>
                <div className="container">
                    <div className="row main-content">
                        <div className="col-md-5">
                            <div className="home-foto">
                                <img src={require("../img/foto-about.jpg")} />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="home-text">
                                <p>Hi, my name is</p>
                                <h1>Anne Sullivan</h1>
                                <h3>I build things for the web</h3>
                                <a className="home-button-contact" href="contact.html">Get In Touch</a>
                            </div>
                        </div>
                    </div>    
                </div>                  
            </section>
        );
    }
}

export default SectionHome;
