import React from 'react';
import { ProjectSection, ProjectsContainer, ProjectCard1, ProjectCard2 } from './ProjectsStyles';
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';

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

                </ProjectCard1>
                <ProjectCard2>
                    <div>
                        <Project3/>
                    </div>
                    <div className='ps-3 align-end'>
                        <h2 ><span className='pfeffer'>PROJECT</span> <span className='Text-Gradient'>2</span></h2>
                        <p className='justify'>Project 3 required us to take our comics from first year and animate a large portion of panels from them to apply the knowledge learned from this year.</p><br/>
                        <p className='justify'>I learnt a lot about the animation workflow and making everything cohesive, animating type proved to be the most difficult because I struggled to see it as a character rather than text.</p>
                    </div>
                </ProjectCard2>
            </ProjectsContainer>
        </ProjectSection>
    );
};

export default Projects;