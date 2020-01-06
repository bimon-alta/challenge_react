import React from 'react';

class Footer extends React.Component{
    render() {
        return (
            <footer class="experience-footer d-flex align-items-center">
                <div class="container">
                    <div class="row footer">
                        <div class="col-md-4 footer-image">
                            <img src={require("../img/logo-ALTA-v2.png")} />
                        </div>
                        <div class="col-md-4 socmed">
                            <span class="span-socmed">Social Media</span>
                            <ul class="footer-socmed list-unstyled">
                                <li class="facebook">
                                    <a href="www.facebook.com"><img src={require("../img/ic_fb.png")} /></a> 
                                </li>
                                <li class="twitter">
                                    <a href="www.twitter.com"><img src={require("../img/ic-twitter.png")} /></a>
                                </li>
                                <li class="instagram">
                                    <a href="www.instagram.com"><img src={require("../img/ic-instagram.png")} /></a>
                                </li>
                                <li class="linkedin">
                                    <a href="www.linkedin.com"><img src={require("../img/ic-linkedin.png")} /></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 copyright">
                            <span class="span-copyright">Copyright &copy; 2020 Alterra</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;