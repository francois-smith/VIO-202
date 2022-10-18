import React from 'react';
import { AboutSection } from './AboutStyles';

const Card: React.FC = () => {
    return (
       <AboutSection id='AboutSection'>
            <img className="heading-sword" src="./Media/SVG/Sword.svg" alt="Sword" />
            <h2 className='Section_Heading'>ABOUT ME</h2>
            
            
       </AboutSection>
    );
};

export default Card;