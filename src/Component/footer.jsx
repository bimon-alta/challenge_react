import React from 'react';

class Footer extends React.Component{
    render() {
        return (
            <footer className="experience-footer d-flex align-items-center">
                <div className="container">
                    <div className="row footer">
                        <div className="col-md-4 footer-image">
                            <img src={require("../img/logo-ALTA-v2.png")} />
                        </div>
                        <div className="col-md-4 socmed">
                            <span className="span-socmed">Social Media</span>
                            <ul className="footer-socmed list-unstyled">
                                <li className="facebook">
                                    <a href="www.facebook.com"><img src={require("../img/ic_fb.png")} /></a> 
                                </li>
                                <li className="twitter">
                                    <a href="www.twitter.com"><img src={require("../img/ic-twitter.png")} /></a>
                                </li>
                                <li className="instagram">
                                    <a href="www.instagram.com"><img src={require("../img/ic-instagram.png")} /></a>
                                </li>
                                <li className="linkedin">
                                    <a href="www.linkedin.com"><img src={require("../img/ic-linkedin.png")} /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 copyright">
                            <span className="span-copyright">Copyright &copy; 2020 Alterra</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;