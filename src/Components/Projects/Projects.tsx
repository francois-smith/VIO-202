import React from 'react';
import { ProjectSection, ProjectsContainer, ProjectCard1, ProjectCard2 } from './ProjectsStyles';
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const Project2: React.FC = () => {
    const { rive, RiveComponent} = useRive({
        src: './Media/Anims/portfolio_pedastal.riv',
        artboard: 'Artboard',
        stateMachines: ['State Machine 1'],
        autoplay: true,
        animations: ['Timeline 2', 'Timeline 1'],
    });

    const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
    const unHoverInput = useStateMachineInput(rive, "State Machine 1", "UnHover");

    const hoverAction = () => {
        hoverInput && hoverInput.fire();
    }

    const unhoverAction = () => {
        unHoverInput && unHoverInput.fire();
    }

    return (
        <RiveComponent id='project2' onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
};

const Project3: React.FC = () => {
    const { rive, RiveComponent} = useRive({
        src: './Media/Anims/portfolio_book.riv',
        artboard: 'Artboard',
        stateMachines: ['State Machine 1'],
        autoplay: true,
        animations: ['Timeline 2', 'Timeline 1'],
    });

    const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
    const unHoverInput = useStateMachineInput(rive, "State Machine 1", "UnHover");

    const hoverAction = () => {
        hoverInput && hoverInput.fire();
    }

    const unhoverAction = () => {
        unHoverInput && unHoverInput.fire();
    }

    return (
        <RiveComponent id='project3' onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
};

const Projects: React.FC = () => {
    return (
        <ProjectSection id='ProjectsSection'> 
            <img className="heading-sword" src="./Media/SVG/Sword.svg" alt="Sword" />
            <h2 className='Section_Heading'>PROJECTS</h2>
            <ProjectsContainer>
                <ProjectCard1>
                    <div className='pe-3'>
                        <h2><span className='pfeffer'>PROJECT</span> 2 <span className='pfeffer divider'>|</span> <span className='pfeffer Text-Gradient'>INFOGRAPHIC</span></h2>
                        <p className='justify-start'>Project 2 tasked with creating infographics for our comics that displayed extra information, this included but was not limited to our main character stats, the world and also some extra information.</p><br/>
                        <p className='justify-start'>I enjoyed this theme the most because it allowed me to flesh out the world of my comic, it also gave me the chance to fill in the gaps that were present in the story by adding some much needed backstory.</p>
                        <div className='button-div '>
                            <button>
                                <span className="text">VIEW PROJECT</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <a href="https://francois-smith-infographic.netlify.app/">
                            <Project2/>
                        </a>
                    </div>
                </ProjectCard1>
                <ProjectCard2>
                    <div>
                        <a href="https://vio.francois-smith.com/">
                            <Project3/>
                        </a>
                    </div>
                    <div className='ps-3'>
                        <h2><span className='pfeffer'>PROJECT</span> 3 <span className='pfeffer divider'>|</span> <span className='pfeffer Text-Gradient'>MOTION COMIC</span></h2>
                        <p className='justify-end'>Project 3 tasked us to adapt our comics from first year into motion comics that also included sound, it allowed us to combine all the knowledge we learned throughout the year.</p><br/>
                        <p className='justify-end'>I learnt a lot about animation workflows and achieving a cohesive animation style, the hardest part was animating type, mainly because I struggled to see text as a character rather than something that always needs to be rigid.</p>
                        <div className='button-div'>
                            <button>
                                <span className="text">VIEW PROJECT</span>
                            </button>
                        </div>
                    </div>
                </ProjectCard2>
            </ProjectsContainer>
        </ProjectSection>
    );
};

export default Projects;