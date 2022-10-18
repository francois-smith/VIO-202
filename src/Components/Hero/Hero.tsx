import React from 'react';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';
import { HeroSection, HeroInfo, HeroImage} from './HeroStyles';

const Hero: React.FC = () => {
    return (
       <HeroSection>
           <HeroInfo>
                <p id='Welcome' className='pfeffer'>
                    <span>Hi, my name is</span>
                </p>
                <p id='Name'>
                    <span className='Text-Gradient'>Francois Smith</span>
                </p>
           </HeroInfo>
           <BackgroundAnimation/>
           <HeroImage src="/Media/Images/Hero.png"/>
       </HeroSection >
    ); 
};

export default Hero;