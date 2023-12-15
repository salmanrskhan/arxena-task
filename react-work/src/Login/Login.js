import React from 'react';
import { Link } from 'react-router-dom';
import { PageContents, SessionStorageUpdates } from '../Components/utils';
import imgLogo from '../assets/img/arxena-logo/arxena-logo.png';

import Banner from '../Components/Banner';


const Login = () => {

  return (
    <div id="all_content" style={{ height: '100%' }}>
      <div className="desk" style={{ height: '100%' }}>
        <div style={{ display: 'table', width: '100%', height: '100%' }}>
          <div style={{ display: 'table-cell', width: '70%', backgroundColor: 'white', padding: '20px' }}>
            <Link to="/">
              <img
                style={{ width: '10vw', marginTop: '5px', cursor: 'pointer' }}
                //   onClick={() => new PageContents().changePage('/#')}
                src={imgLogo}
                alt="Arxena Logo"
              />
            </Link>
            <div
              className="shadow content_section"
              style={{
                width: '500px',
                padding: '30px',
                backgroundColor: 'rgba(255,255,255)',
                borderRadius: '5px',
                textAlign: 'center',
                left: '0',
                right: '0',
                marginTop: '50px',
              }}
            >
              <div id="signup_form_content">
                <span style={{ fontSize: '16pt', fontWeight: '300' }}>Welcome back!</span>
                <br />
                <br />
                <div style={{ width: '90%', left: '5%', position: 'relative' }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        id="email"
                        type="text"
                        className="form-control-custom enter_click"
                        placeholder="Email"
                        onInput={() => new SessionStorageUpdates().updateEmail(this)}
                      />
                      <br />
                    </div>
                    <div className="col-sm-12">
                      <input
                        id="password"
                        type="password"
                        className="form-control-custom enter_click"
                        placeholder="Password"
                        onInput={() => new SessionStorageUpdates().updatePassword(this)}
                      />
                      <br />
                    </div>
                  </div>
                  <br />
                  <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px' }}>
                    <div
                      id="login_button_desktop"
                      className="form_button enter_click"
                      style={{ margin: 'auto', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}
                      // onClick={() => new PageContents().logIn()}
                      tabIndex="-1"
                    >
                      Log in
                    </div>
                  </div>
                </div>
                <div id="login_error" style={{ marginTop: '20px' }}></div>
                <div
                  style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }}
                // onClick={() => new PageContents().changePage('/password_reset')}
                >
                  Forgot your password?{' '}
                  <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Reset it here</u>
                </div>
                <Link to="/signup"
                  style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }}
                // onClick={() => new PageContents().changePage('/signup')}
                >
                  Need an account?{' '}
                  <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Sign up for free</u>
                </Link>

              </div>
            </div>
          </div>

          <Banner />

        </div>
      </div>

      <div className="mobi">
        <div style={{ width: '100%', height: '100%' }}>
          <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <Link to="/">
              <img
                style={{ width: '25vw', marginTop: '5px', cursor: 'pointer' }}
                onClick={() => new PageContents().changePage('/#')}
                src={imgLogo}
                alt="Arxena Logo"
              />
            </Link>
            <div
              className="shadow content_section"
              style={{
                width: '100%',
                padding: '30px',
                backgroundColor: 'rgba(255,255,255)',
                borderRadius: '5px',
                textAlign: 'center',
                left: '0',
                right: '0',
                marginTop: '50px',
              }}
            >
              <div id="signup_form_content">
                <span style={{ fontSize: '16pt', fontWeight: '300' }}>Welcome back!</span>
                <br />
                <br />
                <div style={{ width: '90%', left: '5%', position: 'relative' }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        id="email"
                        type="text"
                        className="form-control-custom"
                        placeholder="Email"
                        onInput={() => new SessionStorageUpdates().updateEmail(this)}
                      />
                      <br />
                    </div>
                    <div className="col-sm-12">
                      <input
                        id="password"
                        type="password"
                        className="form-control-custom"
                        placeholder="Password"
                        onInput={() => new SessionStorageUpdates().updatePassword(this)}
                      />
                      <br />
                    </div>
                  </div>
                  <br />
                  <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px' }}>
                    <div
                      className="form_button"
                      style={{ margin: 'auto', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}
                      onClick={() => new PageContents().logIn()}
                    >
                      Log in
                    </div>
                  </div>
                </div>
                <div id="login_error_mobi" style={{ marginTop: '20px' }}></div>
                <div
                  style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }}
                  onClick={() => new PageContents().changePage('/password_reset')}
                >
                  Forgot your password? <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Reset it here</u>
                </div>
              </div>
            </div>
          </div>
          
          <Banner />
        </div>
      </div>

    </div>
  );
};

export default Login;
