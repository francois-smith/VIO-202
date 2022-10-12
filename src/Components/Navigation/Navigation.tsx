import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Navigation, Link, NavigationContainer, NavigationLinks, NavigationSocials, Social} from './NavigationStyles'
import Burger from "./BurgerMenu";

const Header: React.FC = () => {
    return (
        <Navigation id="PageTop">
            <NavigationContainer>
                <NavigationLinks>
                    <a href='/'><img src="/Media/Images/Logo-Main.png" alt="Main Logo"/></a>
                    <li className="first">
                        <Link href='#ProjectsSection'>
                            Projects
                        </Link>
                    </li>
                    <li className="second">
                        <Link href='#TechnologiesSection'>
                            Technologies
                        </Link>
                    </li>
                    <li className="third">
                        <Link href='#AboutSection'>
                            About
                        </Link>
                    </li>
                    <li className="fourth">
                        <Link href='#ContactSection'>
                            Contact
                        </Link>
                    </li>
                </NavigationLinks>
                <NavigationSocials>
                    <Social href='https://github.com/francois-smith' className="third">
                        <span className="Social-Text">Github</span>
                        <AiFillGithub className='svg_icon'></AiFillGithub>
                    </Social>
                    <Social href='https://instagram.com/_francois.smith_' className="second">
                        <span className="Social-Text">Instagram</span>
                        <AiFillInstagram className='svg_icon'></AiFillInstagram>              
                    </Social>
                    <Social href='https://www.linkedin.com/in/francois-smith-b02609210/' className="first">
                        <span className="Social-Text">LinkedIn</span>
                        <AiFillLinkedin className='svg_icon'></AiFillLinkedin>
                    </Social>
                </NavigationSocials>
            </NavigationContainer>
            <Burger/>
        </Navigation>
    );
};

export default Header;
