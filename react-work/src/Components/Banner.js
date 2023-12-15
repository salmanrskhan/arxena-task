import React from 'react';
import imgTestimonial from '../assets/img/mannan_pacha_dp.webp';
import imgQuote from '../assets/img/quote.png';
// import imgLinkedin from '../assets/img/arxena-logo/linkedin_logo.png';
import imgQuote1 from '../assets/img/quote1.png';
// import imgTestioLogo from '../assets/img/arxena-logo/EY_logo_2019.png';

const Banner = () => {
    return (
        <div className="signup_lateral" style={{ display: 'table-cell', width: '30%', padding: '20px', textAlign: 'left' }}>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <img id="testimonial_photo"
                    src={imgTestimonial}
                    style={{ width: '150px', borderRadius: '50%' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
                <img
                    src={imgQuote}
                    style={{ width: '40px', marginRight: '40px', marginBottom: '20px' }} />
            </div>
            <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i>
            <br />
            <span style={{ fontSize: '13pt' }}>
                <br />
                <br />
                <strong style={{ fontWeight: '500' }} id="testimonial_name">
                    Mannan Pacha
                </strong>{' '}
                |
            </span>
            <span id="testimonial_title" style={{ fontSize: '13pt' }}>
                Manager - Ernst &amp; Young
            </span>
            <br />
            <img id="testimonial_logo"
                src="../assets/img/EY_logo_2019.png"
                style={{ height: '20px' }} />
            <br />
            <br />
            <img
                id="linkedin_logo"
                src="../assets/img/linkedin_logo.png"
                onClick={() => window.open('https://www.linkedin.com/in/mannanpacha1988')}
                style={{ height: '20px', cursor: 'pointer' }}
            />
            <div style={{ textAlign: 'right' }}>
                <img
                    src={imgQuote1}
                    style={{ width: '40px', marginRight: '40px' }} />
            </div>
        </div>

        
    )
}

export default Banner