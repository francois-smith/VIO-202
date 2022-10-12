import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { HeroSection, HeroInfo, HeroImage} from './HeroStyles';

const Hero: React.FC = () => {
    return (
       <HeroSection>
           <HeroInfo>
                <p id='Welcome'>
                    <span>Hi, my name is</span>
                </p>
                <p id='Name'>
                    <span className='Text-Gradient'>Francois Smith</span>
                </p>
                <p id='Dev'>
                    <span>Web Developer / UI Designer</span>
                </p>
                <a href="/Media/CV/Francois-Smith-CV.pdf" id="CV" target="_blank">
                    <div className="cv-button">
                        <div>
                            <span className="Text-Gradient">View CV</span>
                        </div>
                    </div>
                </a>
           </HeroInfo>
            <svg id='folder' width="523" height="350" viewBox="0 0 523 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='path' d="M499 31H444.5L432.5 81H421.5V2H460.5L466.5 15.5H500.5V31H520L508.5 81H434L472 82.1689V138C472 173.346 443.346 202 408 202H90C41.3989 202 2 241.399 2 290V350" stroke="url(#paint0_linear_447_4)" stroke-width="4"/>
                <defs>
                <linearGradient id="paint0_linear_447_4" x1="-257" y1="2" x2="-257" y2="350" gradientUnits="userSpaceOnUse">
                <stop stop-color="#00ADEE"/>
                <stop offset="1" stop-color="#584895"/>
                </linearGradient>
                </defs>
            </svg>
           <BackgroundAnimation/>
           <HeroImage src="/Media/Images/Hero.png"/>
       </HeroSection >
    ); 
};

export default Hero;