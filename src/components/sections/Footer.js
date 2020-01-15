import React from 'react';
import '../css/Footer.css';
import { Row,Col } from 'antd';
import Iframe from 'react-iframe'
class CFooter extends React.Component {
    render() {
        return (
            // <div className="footer">
            <footer id="footer" class="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                    <Row>
                    
                        <Col md={4} xs={6} sm={12}>
                        <div className="widget subscribe no-box">
                            <img className="footerlogo" src={require("../assets/iiitb.png")}/>
                        </div>
                        </Col>

                        <Col md={4} xs={6} sm={12}>
                        <div className="widget no-box">
                            <h1 className="widget-title">Connect<span></span></h1>
                            <ul className="thumbnail-widget">
                            <li>
                            <div className="thumb-content"><a href="https://www.facebook.com/iiitb.infin8/?ref=br_rs">Facebook</a></div>	
                            </li>
                            <li>
                            <div className="thumb-content"><a href="https://www.instagram.com/infin8_iiitb/?hl=en">Instagram</a></div>	
                            </li>
                            </ul>
                        </div>
                        </Col>

                        <Col md={4} xs={6} sm={12}>
                        <div className="widget no-box">
                            <h1 className="widget-title">Contact Us<span></span></h1>
                            <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                            <ul className="thumbnail-widget">
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                            </ul>
                        </div>
                        </Col>

                        <Col md={4} xs={6} sm={12}>
                        <div className="widget no-box">
                            <ul className="thumbnail-widget">
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                    <br></br>
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                                <li>
                                    <h3>Adam Levine</h3>+91 7226938999
                                </li>
                            </ul>
                        </div>
                        </Col>
                        <Col md={4} xs={6} sm={12}>
                        <h2 style={{color: "#fff"}}>Event Location</h2>
                                    <br></br>
                                    <address>
                                        <p style={{color: "#fff"}}>
                                            26/C, Hosur Road,Electronics City Phase 1, Electronic City
                                            <br />
                                            Karnataka,India.
                                            <br />
                                            560100
                                        </p>
                                    </address>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9771672553525!2d77.66104301532664!3d12.844751190939244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae135aeb7f340f%3A0x3ad86af40d2ac611!2sInternational%20Institute%20of%20Information%20Technology%20Bangalore!5e0!3m2!1sen!2sin!4v1579113162889!5m2!1sen!2sin"
                         width="100%" height="300" allowfullscreen="">
                        </Iframe>
                        </Col>
                    </Row>
                    </div>
                </div>
                    
                <div className="footer-copyright">
                    <div className="container">
                    <Row>
                    <div className="col-md-12 text-center">
                    <p>Copyright <a href="https://zense.co.in">Zense</a>  © 2020. All rights reserved.</p>
                    </div>
                    </Row>
                    </div>
                </div>

            </footer>
        );
    }
}

export default CFooter;