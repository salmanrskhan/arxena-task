import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import imgLogo from '../assets/img/arxena-logo/arxena-logo.png';

import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [phone, setPhone] = useState('');

    const changePage = (page) => {
        // Your logic to change the page
        console.log(`Changing page to ${page}`);
    };

    const updateFullName = (value) => {
        // Your logic to update full name
        console.log(`Updating full name: ${value}`);
    };

    const updatePhone = (value) => {
        // Your logic to update phone
        console.log(`Updating phone: ${value}`);
    };

    const updateEmail = (value) => {
        // Your logic to update email
        console.log(`Updating email: ${value}`);
    };

    const updatePassword = (value) => {
        // Your logic to update password
        console.log(`Updating password: ${value}`);
    };

    const handleSelectNewAccountUseCase = (event) => {
        // Implement your logic for handling the selection here
        console.log(`Selected use case: ${event.target.getAttribute('use_case')}`);
    };

    const signUp = () => {
        // Your logic for signing up
        console.log('Signing up...');
    };

    return (
        <div id="all_content" style={{ height: '100%' }}>
            <div className="desk" style={{ height: '100%' }}>
                <div style={{ display: 'table', width: '100%', height: '100%' }}>
                    <div style={{ display: 'table-cell', width: '70%', backgroundColor: 'white', padding: '20px' }}>
                    <Link to="/">
                        <img
                            style={{ width: '10vw', marginTop: '5px', cursor: 'pointer' }}
                            // onClick={() => new PageContents().changePage('/#')}
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
                            }}
                        >
                            <div id="signup_form_content">
                                <span style={{ fontSize: '16pt', fontWeight: '300' }}>
                                    Get started with 10 free org-chart credits.<br />No credit card is needed.
                                </span>
                                <br />
                                <br />
                                <div style={{ width: '90%', left: '5%', position: 'relative' }}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input
                                                id="full_name"
                                                type="text"
                                                className="form-control-custom"
                                                placeholder="Full Name"
                                                onInput={(e) => updateFullName(e.target.value)}
                                            />
                                            <br />
                                        </div>

                                        <div className="col-sm-12" style={{ height: '62px' }}>
                                            <PhoneInput
                                                international
                                                defaultCountry="US"
                                                value={phone}
                                                onChange={setPhone}
                                                placeholder="Mobile Number"
                                                className="form-control-custom"
                                                inputStyle={{ paddingLeft: '85px' }}
                                                style={{ width: '100%' }}
                                            />

                                            <br />
                                        </div>

                                        <div className="col-sm-12">
                                            <input
                                                id="email"
                                                type="text"
                                                className="form-control-custom enter_click"
                                                placeholder="Business Email"
                                                onInput={(e) => updateEmail(e.target.value)}
                                            />
                                            <br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control-custom enter_click"
                                                placeholder="Password"
                                                onInput={(e) => updatePassword(e.target.value)}
                                            />
                                            <br />
                                        </div>

                                        <div className="col-sm-12 dropdown show">
                                            <button
                                                id="new_account_use_case"
                                                className="btn dropdown-toggle"
                                                type="button"
                                                style={{
                                                    width: '100%',
                                                    fontSize: '10pt',
                                                    backgroundColor: 'white',
                                                    border: '1px solid rgb(210,210,210)',
                                                    color: '#495057',
                                                }}
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                I work for a
                                            </button>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton"
                                                style={{
                                                    width: '93%',
                                                    fontSize: '10pt',
                                                    position: 'absolute',
                                                    willChange: 'transform',
                                                    top: '0px',
                                                    left: '0px',
                                                    transform: 'translate3d(0px, 34px, 0px)',
                                                }}
                                                x-placement="bottom-start"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    onClick={handleSelectNewAccountUseCase}
                                                    use_case="agency"
                                                    label="Recruitment Agency"
                                                >
                                                    Recruitment Agency
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    onClick={handleSelectNewAccountUseCase}
                                                    use_case="corporate"
                                                    label="Corporate"
                                                >
                                                    Corporate
                                                </a>
                                            </div>
                                        </div>


                                    </div>

                                    <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px', marginTop: '20px' }}>
                                        <div
                                            id="signup_button_desktop"
                                            className="form_button enter_click"
                                            style={{ margin: 'auto', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}
                                            onClick={() => signUp()}
                                            tabIndex="-1"
                                        >
                                            Create account
                                        </div>
                                    </div>
                                </div>
                                <div id="signup_error" style={{ marginTop: '20px' }}></div>
                                <Link to="/login"
                                    style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }}
                                >
                                    Already registered? <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Log in instead</u>
                                </Link>
                                <br /><br />

                                <div style={{ color: 'rgb(197,197,205)' }}>
                                    <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Account lock: </u>We discourage licence sharing. Your account will be accessible from this device only
                                </div>
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
                            // onClick={() => new PageContents().changePage('/#')}
                            src={imgLogo}
                            alt="Arxena Logo"
                        />
                        </Link>
                        <div className="shadow content_section" style={{ width: '100%', padding: '30px', backgroundColor: 'rgba(255,255,255)', borderRadius: '5px', textAlign: 'center', left: '0, right:0' }}>
                            <div id="signup_form_content_mobi">
                                <span style={{ fontSize: '16pt', fontWeight: '300' }}>Get started with 10 free org-chart credits.<br />No credit card is needed.</span>
                                <br />
                                <br />
                                <div style={{ width: '90%', left: '5%', position: 'relative' }}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input id="full_name" type="text" className="form-control-custom" placeholder="Full Name" onInput={updateFullName} />
                                            <br />
                                        </div>
                                        <div className="col-sm-12" style={{ height: '62px' }}>
                                            <PhoneInput
                                                international
                                                defaultCountry="US"
                                                value={phone}
                                                onChange={setPhone}
                                                placeholder="Mobile Number"
                                                className="form-control-custom"
                                                inputStyle={{ paddingLeft: '85px' }}
                                                style={{ width: '100%' }}
                                            />

                                            <br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input id="email" type="text" className="form-control-custom enter_click" placeholder="Business Email" onInput={updateEmail} />
                                            <br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input id="password" type="password" className="form-control-custom" placeholder="Password" onInput={updatePassword} />
                                            <br />
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', textAlign: 'center', position: 'relative', paddingTop: '25%' }}>
                                        <div className="form_button" style={{ margin: 'auto', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }} onClick={signUp}>Create account</div>
                                    </div>
                                </div>
                                <div id="signup_error_mobi"></div>
                                <Link to="/login" style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }} onClick={changePage}>Already registered? <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Log in instead</u></Link>
                            </div>
                        </div>
                    </div>

                   <Banner />
                </div>
            </div>


        </div>
    );
};

export default SignUp;
