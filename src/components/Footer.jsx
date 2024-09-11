import React from 'react';

import './Footer.css';




const Footer= () => {
  
    return (
        <footer className='footer'>
            <div className='footer_logo'>
                <img src="/icons/gray-whale.png" alt="" />
                <p className='footer_logo-title'>Lotesde<span>mar</span></p>
            </div>
            <div className='footer_social'>
                <img src="/icons/linkedin.png" alt="" />
                <img src="/icons/instagram.png" alt="" />
                <img src="/icons/facebook.png" alt="" />
                <img src="/icons/youtube.png" alt="" />
            </div>
        </footer>
    );
};

export default Footer;