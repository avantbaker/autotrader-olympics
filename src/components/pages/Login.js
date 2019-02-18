import React, { Component, Fragment } from 'react';
import Logo from '../../assets/atc_olympics.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Header from '../commons/Header';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <img className="logo" src={Logo} alt="Autotrader Olympics Logo" />
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="margin-bottom-5">Autotrader<br />Olypics</h1>
            </div> 
            <div className="col-sm-12">
              <div className="login">
                  <Link to="/events">
                    <div className="button">Sign In</div>
                  </Link>
                  <Link to="/events">
                  <div className="button">Sign Up via Github <FontAwesomeIcon className="margin-left-1" size="1x" icon={faBomb} /></div>
                  </Link>
                  <Link to="/events">
                    <div className="button">Download App</div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Login;
