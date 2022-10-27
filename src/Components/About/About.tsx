import React from 'react';
import { AboutSection, AboutContainer } from './AboutStyles';

const Card: React.FC = () => {
    return (
       <AboutSection id='AboutSection'>
            <AboutContainer>
                <span className="tags top-tags">
                    <span className="tag">
                        &lt;html&gt;
                        <br />
                    </span>
                </span>
                <div className="page-inner">
                    <h2>Who am I?</h2>
                    <div className="about-containers">

                    </div>
                </div>
                <span className="tags bottom-tags">
                        <br />
                        &lt;/html&gt;
                </span>
            </AboutContainer>
       </AboutSection>
    );
};

export default Card;