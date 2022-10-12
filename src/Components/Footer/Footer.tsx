import React from 'react'
import { FooterSection, FooterSocials, FooterToTop } from './FooterStyles'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
    const today = new Date();

    return (
        <FooterSection>
            <FooterToTop>
                <a href='#PageTop'>
                    <svg width="18" height="22" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.124969 3.3125L0.124969 6.125L4.49997 3L8.87497 6.125V3.3125L4.49997 0.187501L0.124969 3.3125Z" fill="white"/>
                        <path d="M0.124969 7.6875L0.124969 10.5L4.49997 7.375L8.87497 10.5V7.6875L4.49997 4.5625L0.124969 7.6875Z" fill="white"/>
                    </svg>
                    <p>BACK TO TOP</p>
                </a>
            </FooterToTop>
            <FooterSocials>
                <a href='https://github.com/francois-smith'>
                    <AiFillGithub className='svg_icon'></AiFillGithub>
                </a>
                <a href='https://instagram.com/_francois.smith_'>
                    <AiFillInstagram className='svg_icon'></AiFillInstagram>              
                </a>
                <a href='https://www.linkedin.com/in/francois-smith-b02609210/'>
                    <AiFillLinkedin className='svg_icon'></AiFillLinkedin>
                </a>
            </FooterSocials>
            <p id='legal'>@{today.getFullYear()} Francois Smith All Rights Reserved.</p>
        </FooterSection>
    )
}

export default Footer;