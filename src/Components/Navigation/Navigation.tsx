import React from 'react';
import { Navigation, Link, NavigationContainer, NavigationLinks} from './NavigationStyles'
import Burger from "./BurgerMenu";

const Header: React.FC = () => {
    return (
        <Navigation id="PageTop">
            <NavigationContainer>
                <NavigationLinks>
                    <a href='/'><img src="/Media/Images/Logo-Main.png" alt="Main Logo"/></a>
                    <div className='pfeffer'>
                        <li className="third">
                            <Link href='#AboutSection'>
                                ABOUT
                            </Link>
                        </li>
                        <li className="first">
                            <Link href='#ProjectsSection'>
                                PROJECTS
                            </Link>
                        </li>
                        
                    </div>
                </NavigationLinks>
            </NavigationContainer>
            <Burger/>
        </Navigation>
    );
};

export default Header;
