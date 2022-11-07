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

const goToPageSameTab = (url: string) => {
    let overlay = document.querySelector('.overlay')?.classList.add('overlay-show');
    setTimeout(() => {
        window.location.href = url;
    }, 900);
}

const Projects: React.FC = () => {
    return (
        <ProjectSection id='ProjectsSection'> 
            <div className='swordContainer'>
                <img className="heading-sword" src="./Media/SVG/Sword.svg" alt="Sword" />
            </div>
            <h2 className='Section_Heading'>PROJECTS</h2>
            <ProjectsContainer>
                <ProjectCard1>
                    <div className='pe-3'>
                        <h2><span className='pfeffer'>PROJECT</span> 2 <span className='pfeffer divider'>|</span> <span className='pfeffer Text-Gradient'>INFOGRAPHIC</span></h2>
                        <p className='justify-start'>Project 2 tasked us with creating infographics for our comics that provided extra information, such as a stats section for our main characters, the world it takes place in, and other information.</p><br/>
                        <p className='justify-start'>I enjoyed this theme the most because it allowed me to flesh out the world of my comic, it also gave me a chance to fill in the gaps of the story by adding some much-needed backstory.</p><br/>
                        <p>I mainly fixed some scaling issues on laptop screen sizes and also updated it with a link to my portfolio in the about me section of the project.</p>
                        <div className='button-div '>
                            <button onClick={() => goToPageSameTab("https://francois-smith-infographic.netlify.app/")}>
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
                        <p className='justify-end'>Project 3 tasked us to convert our comics from first year into motion comics that also included sound, it allowed us to combine all the knowledge we learned throughout the year into a single large project.</p><br/>
                        <p className='justify-end'>I learnt a lot about animation workflows and achieving a cohesive animation style, the hardest part was animating type, mainly because I struggled to see text as a character rather than something that always needs to be rigid.</p><br/>
                        <p>The main changes I made were adding a button that links back to my portfolio for theme 4, I also polished some smaller animations and cleaned up some graphics.</p>
                        <div className='button-div'>
                            <button onClick={() => goToPageSameTab("https://vio.francois-smith.com/")}>
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