import React from 'react';
import { TechnologiesSection, TechSectionHeader, TechSection, TechCardsContainer, TechCard } from './TechnologiesStyles'

const Technologies: React.FC = () => {
    return (
        <TechnologiesSection id='TechnologiesSection'>
            <h2 className='Section_Heading'>TECHNOLOGIES</h2>
            <TechSection>
                <TechSectionHeader><span className='Text-Gradient'>Programming Languages</span></TechSectionHeader>
                <TechCardsContainer>
                    <TechCard>
                        <img src="/Media/Technologies/javascript.svg" alt="Javascript Icon" />
                        <p className='TechName'>JAVASCRIPT</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/typescript.svg" alt="Typescript Icon"></img>
                        <p className='TechName'>TYPESCRIPT</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/cpp.svg" alt="Cpp Icon"></img>
                        <p className='TechName'>C++</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/java.svg" alt="Java Icon"></img>
                        <p className='TechName'>JAVA</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/php.svg" alt="PHP Icon"></img>
                        <p className='TechName'>PHP</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/python.svg" alt="Python Icon"></img>
                        <p className='TechName'>PYTHON</p>
                    </TechCard>
                </TechCardsContainer>
            </TechSection>
            <TechSection>
                <TechSectionHeader><span className='Text-Gradient'>Frameworks & Libraries</span></TechSectionHeader>
                <TechCardsContainer>
                    <TechCard>
                        <img src="/Media/Technologies/react.svg" alt="React Icon"></img>
                        <p className='TechName'>REACT</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/angularjs.svg" alt="Angular Icon"></img>
                        <p className='TechName'>ANGULAR</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/vuejs.svg" alt="Vue Icon"></img>
                        <p className='TechName'>VUEJS</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/nodejs.svg" alt="Node Icon"></img>
                        <p className='TechName'>NODE.JS</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/express.svg" alt="Express Icon"></img>
                        <p className='TechName'>EXPRESS.JS</p>
                    </TechCard>
                </TechCardsContainer>
            </TechSection>
            <TechSection>
                <TechSectionHeader><span className='Text-Gradient'>Automation & Tools</span></TechSectionHeader>
                <TechCardsContainer>
                    <TechCard>
                        <img src="/Media/Technologies/git.svg" alt="Git Icon"></img>
                        <p className='TechName'>GIT</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/github.svg" alt="Github Icon"></img>
                        <p className='TechName'>GITHUB</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/figma.svg" alt="Figma Icon"></img>
                        <p className='TechName'>FIGMA</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/postman.svg" alt="Postman Icon"></img>
                        <p className='TechName'>POSTMAN</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/npm.svg" alt="NPM Icon"></img>
                        <p className='TechName'>NPM</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/yarn.svg" alt="Yarn Icon"></img>
                        <p className='TechName'>YARN</p>
                    </TechCard>
                </TechCardsContainer>
            </TechSection>
            <TechSection>
                <TechSectionHeader><span className='Text-Gradient'>Markup & Markdown</span></TechSectionHeader>
                <TechCardsContainer>
                    <TechCard>
                        <img src="/Media/Technologies/html5.svg" alt="HTML Icon"></img>
                        <p className='TechName'>HTML</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/css3.svg" alt="CSS Icon"></img>
                        <p className='TechName'>CSS</p>
                    </TechCard>
                    <TechCard>
                        <img src="/Media/Technologies/markdown.svg" alt="Markdown Icon"></img>
                        <p className='TechName'>MARKDOWN</p>
                    </TechCard>
                </TechCardsContainer>
            </TechSection>
        </TechnologiesSection>  
    );
};

export default Technologies;