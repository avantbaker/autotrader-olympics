import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {
    Container,
} from 'react-bootstrap';
class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    window.location.href = 'http://localhost:8000/auth/github';
  }
  
  render() {
    return (
      <div className="login-page d-flex flex-column justify-content-center">
        <Container> 
          <div className="logo-container">
            <img 
              className="logo" 
              src={Logo} 
              alt="Autotrader Olympics Logo" 
            />
          </div>
        </Container>
        <Container className="login-container">
          
          <div className="login-section">
            
            <div className="login-section-header">
              <h5>Welcome To The</h5>
              <h2>Autotrader</h2>
              <h1>OLYMPICS</h1>
            </div>
            
            <h5 className="tight mb-4">
              <p>As celebratory tears streamed down victorious cheeks, and medals, gold and silver alike, were held aloft, 
it was one year ago that the closing ceremonies brought the first Autotrader Olympic games to an end.  
The elation of success and the anguish of defeat, both mental and physical, was experienced as 
team members from the furthest reaches of the 11th floor came together as one.</p>

<p>It is time to rise again to meet the challenges, both new and old.  There are records to be beaten.  
There are rivalries to be re-ignited.  And there is honor (and probably prizes) to be secured.</p>

<p>Here...  Now...  The Second Annual Autotrader Olympic Games are upon us!</p>

            </h5>

            <div className="button-toolbar">
              {/*<div 
                className="btn btn-secondary" 
                onClick={this.login}
              >
                <span>Sign in via Github</span>
              </div>*/}
              <Link
                to={'team/create'}
                className="btn btn-primary"
              >
                  Create New Team
              </Link>
              <Link
                to={'teams'}
                className="btn btn-secondary"
              >
                  Teams
              </Link>
              <Link
                to={'events'}
                className="btn btn-secondary"
              >
                  Events
              </Link>
            </div>

          </div>
        </Container>
      </div>
    );
  }
}


export default Login;
