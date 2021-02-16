import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    return (
        <footer>
            <div className="holder-footer">
                <Row>
                    <Col sm="12" md="7">
                        <Row>
                            <Col md="4">
                            <Link className="navbar-logo" to='/'>
                                LOGO
                            </Link> 
                                <p>The marketplace for USU Cars, American Cars Muscle Cars and Oldtimer from the United States.</p>
                            </Col>
                            <Col>
                                <nav>
                                    <ul>
                                        <li><Link to="/">Blog</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                        <li><Link to="/">Help</Link></li>
                                    </ul>                                  
                                </nav>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" md="5">
                        <div className="footer-icon">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook-square"></i>                            
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>            
    )
}

export default Footer