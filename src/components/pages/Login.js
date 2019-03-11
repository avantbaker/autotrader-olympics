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
              First, a certified pre-owned car can be better than a traditional 
              used vehicle because regular used cars often come.
            </h5>

            <div className="button-wrapper">
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
                  Add New Team
              </Link>
              <Link
                to={'teams'}
                className="btn btn-secondary"
              >
                  Edit Existing Team
              </Link>
              <Link
                to={'add-team'}
                className="btn btn-secondary"
              >
                  Individual Entries
              </Link>
            </div>

          </div>
        </Container>
      </div>
    );
  }
}


export default Login;
