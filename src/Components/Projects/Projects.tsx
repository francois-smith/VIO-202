import React from 'react';
import { ProjectSection, ProjectsContainer, Project } from './ProjectsStyles';
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
    {
        type: "Designed & Coded",
        title: "Portfolio Website",
        description: "The website you are currently viewing! Built to showcase my work and to get in contact with me. All the code is open source and free to use to your heart's content. Includes an email autoresponder system built with PHP.",
        tags: [
            "Styled Components", "React", "Typescript", "React Icons", "PHP"
        ],
        github_link: "https://github.com/francois-smith/portfolio-website",
        link: "https://francois-smith.com",
        image: {
            path: "/Media/Projects/portfolio.png",
            alt: "",
        }
    },
    {
        type: "Designed & Coded",
        title: "M Photography",
        description: "Portfolio and Showcase website for a local photographer. Main features include a responsive mosaic photo gallery used to showcase her work. Photos are stored on a server with API calls to fetch dynamic data dependant on the section you are viewing.",
        tags: [
            "Styled Components", "React", "React Router", "React Icons", "PHP"
        ],
        github_link: "https://github.com/francois-smith/M-Photography",
        "link": "https://maryna-m-photography.com",
        image: {
            path: "/Media/Projects/mphotography.png",
            alt: "",
        }
    },
    {
        type: "Designed",
        title: "Moonrealm Productions",
        description: "A group project I did in my first year of university. The module required us to create a website for a game studio, this was my group's submission. Built using vanilla HTML5, CSS3 and JS.",
        tags: [
            "CSS3", "Javascript", "University Project", "HTML5"
        ],
        github_link: "https://github.com/Multimedia-Overachievers/INL120",
        "link": "https://inl-120.netlify.app/",
        image: {
            path: "/Media/Projects/moonrealm.png",
            alt: "",
        }
    },
]

const Projects: React.FC = () => {
    return (
        <ProjectSection id='ProjectsSection'> 
            <h2 className='Section_Heading'>PROJECTS</h2>
            <ProjectsContainer>
                {projects.map((project, key) =>{
                    return (
                        <Project key={key}>
                            <div className='project-content'>
                                <div className='project-header'>
                                    <h3 className='project-type'><span className='Text-Gradient'>{project.type}</span></h3>
                                    <a href={project.link}><h2 className='project-title'>{project.title}</h2></a>
                                </div>
                                <div className='project-description'>
                                    <p>{project.description}</p>
                                </div>
                                <div className='project-tags'>
                                    {project.tags.map((tag, key) =>{
                                        return (
                                            <span key={key} className='project-tag'>{tag}</span>
                                        );
                                    })}
                                </div>
                                <div className='project-links'>
                                    <a href={project.github_link}><FiGithub size={22} className='project-link'/></a>
                                    <a href={project.link}><FiExternalLink size={22} className='project-link'/></a>
                                </div>
                            </div>
                            <div className="project-image">
                            <a href={project.link}><img src={project.image.path} alt={project.image.alt}/></a>
                            </div>
                        </Project>
                    );
                })}
            </ProjectsContainer>
            <p id="Project_Footer">And many more to come!</p>
        </ProjectSection>
    );
};

export default Projects;