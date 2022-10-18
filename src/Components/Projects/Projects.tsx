import React from 'react';
import { ProjectSection, ProjectsContainer, ProjectCard } from './ProjectsStyles';
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const Project1: React.FC = () => {
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
        <RiveComponent id='project2' onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
};

const Projects: React.FC = () => {
    return (
        <ProjectSection id='ProjectsSection'> 
            <img className="heading-sword" src="./Media/SVG/Sword.svg" alt="Sword" />
            <h2 className='Section_Heading'>PROJECTS</h2>
            <ProjectsContainer>
                <ProjectCard>
                    <div>
                        <Project1/>
                    </div>
                    <div>
                        <h3><span className='pfeffer'>PROJECT</span> 2</h3>
                    </div>
                </ProjectCard>
            </ProjectsContainer>
        </ProjectSection>
    );
};

export default Projects;