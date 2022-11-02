import React from 'react';
import { AboutSection, AboutContainer, AboutCards } from './AboutStyles';
import { SiTailwindcss, SiTypescript, SiReact, SiJavascript, SiCplusplus } from 'react-icons/si';

const Card: React.FC = () => {
    //function to apply class on hover, called from html elment onMouseEnter
    const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const cards = document.querySelectorAll('.aboutCard');
        cards.forEach(card => {
            card.classList.remove('active-card');
        });

        const card = e.currentTarget;
        card.classList.add('active-card');
    }

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
                    <AboutCards>
                        <div onMouseEnter={handleHover} className='aboutCard active-card'>
                            <img src="./Media/SVG/about.svg" className='about-icon' alt="book" />
                            <div className='card-content'>
                                <h3>About Me</h3>
                                <p>
                                    My name is Francois Smith, I am currently studying BIS Multimedia at the University of Pretoria. I am passionate about learning new technologies and everything tech related.
                                </p>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover} className='aboutCard'>
                            <img src="./Media/SVG/code.svg" className='about-icon' alt="book" />
                            <div className='card-content'>
                                <h3>Skillset</h3>
                                <p>
                                    My favorite part of this degree is web development. Technologies I really like:
                                </p>
                                <div className='Technologies'>
                                    <SiReact/>
                                    <SiTypescript/>
                                    <SiJavascript/>
                                    <SiTailwindcss/>
                                </div>
                            </div>
                            
                        </div>
                        <div onMouseEnter={handleHover} className='aboutCard'>
                            <img src="./Media/SVG/hobbies.svg" className='about-icon' alt="book" />
                            <div className='card-content'>
                                <h3>Hobbies</h3>
                                <p>
                                    I've always been into tech related stuff, so when I'm not developing I'm probably playing video games or developing games and websites.
                                </p>
                            </div>
                        </div>
                    </AboutCards>
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