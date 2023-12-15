import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgGpt from '../assets/img/powered_by_gpt4.png';
import imgLogo from '../assets/img/arxena-logo/arxena-logo.png';
// import imgLinkedin from '../assets/img/linkedin-icon-png-circle-2.png';
import imgTwitter from '../assets/img/tw.png';
// import imgFacebook from '../assets/img/facebook.png';
// import imgYoutube from '../assets/img/youtube.png';
import imgUpload from '../assets/img/new_upload.png';



const Home = () => {

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            <div className="desk" id="main_container">
                <div style={{ padding: '20px', height: '85vh' }}>
                    <div style={{ display: 'table', width: '100%' }}>
                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}></div>
                        <div
                            id="sign_up_button_front_page"
                            style={{
                                display: 'table-cell',
                                verticalAlign: 'middle',
                                width: '190px',
                                textAlign: 'right',
                            }}
                        >
                            <div
                                className="landing_white_button"
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: 'rgb(36,116,204)',
                                    borderColor: 'rgb(36,116,204)',
                                    color: 'white',
                                    width: '150px',
                                }}
                                onClick={handleSignUpClick}
                            >
                                Sign up
                            </div>
                        </div>
                        <div
                            id="log_in_button_front_page"
                            style={{
                                display: 'table-cell',
                                verticalAlign: 'middle',
                                width: '190px',
                                textAlign: 'right',
                                paddingRight: '20px',
                            }}
                        >
                            <div
                                className="landing_white_button"
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    border: '1px solid rgb(36,116,204)',
                                    color: 'rgb(36,116,204)',
                                    width: '150px',
                                }}
                                onClick={handleLoginClick}
                            >
                                Log in
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'table', width: '100%', padding: '20px' }}>
                        <div
                            style={{
                                display: 'table',
                                width: '40%',
                                marginLeft: '30%',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                paddingTop: '8%',
                            }}
                        >
                            <input style={{ display: 'none' }} type="text" name="fakeusernameremembered" />
                            <input style={{ display: 'none' }} type="password" name="fakepasswordremembered" />
                            <img
                                style={{ width: '15vw', marginTop: '5px', cursor: 'pointer' }}
                                onClick={() => console.log("Navigate to /#")}
                                src={imgLogo}
                                alt="Arxena Logo"
                            />
                            <input
                                id="search_bar_front_page"
                                value=""
                                className="search-bar-front"
                                autoComplete="new-company-entered-by-user"
                                onBlur={() => console.log("On blur function")}
                                onFocus={() => console.log("On focus function")}
                                placeholder="🔍 Search any company's org chart"
                                style={{
                                    display: 'table',
                                    width: '100%',
                                    borderColor: 'rgb(232,232,232)',
                                    placeholderColor: 'rgb(232,232,232)',
                                    height: '3rem',
                                    marginTop: '8%',
                                }}
                                onInput={() => console.log("Update homePageSearchKeyword function")}
                                onKeyPress={(event) => {
                                    if (event.keyCode === 13) console.log("homePageSearch");
                                }}
                            />

                            <div
                                id="front_page_search_bar_loader"
                                style={{
                                    textAlign: 'right',
                                    marginTop: '-6.5%',
                                    marginLeft: '-1%',
                                    marginBottom: '2%',
                                    width: '10%',
                                    marginLeft: '85%',
                                }}
                            >
                                <div
                                    id="button_dropdown_search_jd" className='d-none d-xl-block'
                                    style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-6.25%' }}
                                >
                                    <img style={{ width: '25px' }} src={imgUpload} alt="Upload" />
                                </div>
                            </div>

                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <center>
                                <img src={imgGpt} alt="Open AI Logo" width="200" />
                            </center>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', bottom: '0%', textAlign: 'center' }}>
                    <div style={{ display: 'table', width: '100%' }}>
                        <div
                            style={{
                                display: 'table-cell',
                                width: '100%',
                                paddingLeft: '20px',
                                paddingTop: '2%',
                                textAlign: 'left',
                            }}
                        >
                            <div style={{ paddingLeft: '25px', display: 'inline-block' }}>
                                OrgGPT - Talent Identification Software for Ambitious Companies
                                <br />
                                <a style={{ fontSize: '10pt' }} href="/pricing">
                                    Pricing
                                </a>{' '}
                                |{' '}
                                <a style={{ fontSize: '10pt' }} href="/eula">
                                    Terms of Service
                                </a>{' '}
                                |{' '}
                                <a style={{ fontSize: '10pt' }} href="/privacy">
                                    Privacy Policy
                                </a>{' '}
                                |{' '}
                                <a
                                    style={{ fontSize: '10pt' }}
                                    href="javascript:"
                                    onClick={() => console.log("Open Help Modal")}
                                >
                                    How to Use
                                </a>{' '}
                                |{' '}
                                <a
                                    style={{ fontSize: '10pt' }}
                                    href="/download_chrome_extension"
                                    onClick={() => console.log("Open Help Modal")}
                                >
                                    Download Extension
                                </a>
                                <br />
                                <br />
                            </div>
                            <div
                                style={{
                                    display: 'table-cell',
                                    paddingLeft: '25px',
                                    float: 'right',
                                    marginRight: '5%',
                                }}
                            >
                                <div style={{ display: 'table-cell', width: '70px' }}>
                                    <a href="https://www.linkedin.com/company/arxena" target="_blank">
                                        <img
                                            style={{ width: '43px', cursor: 'pointer' }}
                                            src={imgTwitter}
                                        // alt="LinkedIn"
                                        />
                                    </a>
                                </div>
                                <div style={{ display: 'table-cell', width: '70px' }}>
                                    <a href="https://twitter.com/arxenainc" target="_blank">
                                        <img
                                            style={{ width: '43px', cursor: 'pointer' }}
                                            src={imgTwitter}
                                        // alt="Twitter"
                                        />
                                    </a>
                                </div>
                                <div style={{ display: 'table-cell', width: '70px' }}>
                                    <a href="https://facebook.com/arxenainc" target="_blank">
                                        <img
                                            style={{ width: '43px', cursor: 'pointer' }}
                                            src={imgTwitter}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div style={{ display: 'table-cell', width: '70px' }}>
                                    <a
                                        href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA"
                                        target="_blank"
                                    >
                                        <img
                                            style={{ width: '43px', cursor: 'pointer' }}
                                            src={imgTwitter}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div style={{ display: 'table-cell' }}></div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobi" id="main_container" style={{ height: '100%' }}>
                <div style={{ padding: '10px' }}>
                    <div style={{ display: 'table', height: '100%', width: '100%' }}>
                        <div style={{ display: 'table-cell', verticalAlign: 'text-bottom', width: '300px', textAlign: 'left' }}>
                            <img
                                style={{ width: '25vw', marginTop: '9px', cursor: 'pointer' }}
                                // onClick={handleLogoClick}
                                src={imgLogo}
                                alt="Arxena Logo"
                            />
                        </div>
                        <div style={{ display: 'table-cell', verticalAlign: 'text-bottom' }}></div>
                        <div
                            style={{ display: 'table-cell', verticalAlign: 'text-bottom', width: '160px', textAlign: 'right', paddingRight: '10px' }}
                        >
                            <div
                                className="landing_white_button"
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: 'rgb(36,116,204)',
                                    borderColor: 'rgb(36,116,204)',
                                    color: 'white',
                                    width: '150px',
                                    cursor: 'pointer',
                                }}
                                onClick={handleSignUpClick}
                            >
                                Sign up
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: '2%', marginTop: '40px', marginBottom: '40px' }}>
                        {/* Fake fields are a workaround for Chrome autofill getting the wrong fields */}
                        <input style={{ display: 'none' }} type="text" name="fakeusernameremembered" />
                        <input style={{ display: 'none' }} type="password" name="fakepasswordremembered" />
                        <input
                            id="search_bar_front_page_mobi"
                            type="text"
                            className="search-bar-front"
                            autoComplete="new-password"
                            // onBlur={handleInputBlur}
                            // onFocus={handleInputFocus}
                            placeholder="🔍 Search any company's org chart"
                            style={{
                                zIndex: 1,
                                display: 'table',
                                // marginTop: '-120%',
                                width: '90%',
                                borderColor: 'rgb(232,232,232)',
                                placeholderColor: 'rgb(232,232,232)',
                            }}
                            // onInput={handleInputChange}
                            // onKeyPress={handleKeyPress}
                        />
                        <div id="home_page_dropdown_mobi_elements"></div>
                    </div>

                </div>
                <div
                    style={{
                        width: '100%',
                        bottom: '0%',
                        position: 'absolute',
                        textAlign: 'center',
                        backgroundColor: 'rgb(247,247,251)',
                    }}
                >
                    <div style={{ textAlign: 'left', marginLeft: '5%', marginTop: '5%' }}>
                        <div style={{ display: 'table', width: '100%' }}>
                            <a href="https://www.linkedin.com/company/arxena" target="_blank">
                                <img style={{ width: '43px', cursor: 'pointer' }} src={imgTwitter} alt="LinkedIn" />
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://twitter.com/arxena" target="_blank">
                                <img style={{ width: '43px', cursor: 'pointer' }} src={imgTwitter} alt="Twitter" />
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank">
                                <img style={{ width: '43px', cursor: 'pointer' }} src={imgTwitter} alt="YouTube" />
                            </a>
                        </div>
                        <span style={{ fontSize: '11pt' }}>OrgGPT - Mapping Companies&nbsp;&amp; People</span>
                        <br />
                        <br />
                        <a style={{ fontSize: '10pt' }} href="/eula">
                            Terms of Service
                        </a>
                        <br />
                        <a style={{ fontSize: '10pt' }} href="/privacy">
                            Privacy Policy
                        </a>
                        <br />
                        <span>© 2023 Arxena, Inc. All Rights Reserved.</span>
                        <br />
                        <br />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;



