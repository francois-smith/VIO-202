import React from 'react';
import { Navigation, Link, NavigationContainer, NavigationLinks} from './NavigationStyles'
import Burger from "./BurgerMenu";

const Header: React.FC = () => {
    return (
        <Navigation id="PageTop">
            <NavigationContainer>
                <NavigationLinks>
                    <a href='/'><img src="/Media/Images/Logo-Main.png" alt="Main Logo"/></a>
                    <div>
                        <li className="third">
                            <Link href='#AboutSection'>
                                About
                            </Link>
                        </li>
                        <li className="first">
                            <Link href='#ProjectsSection'>
                                Projects
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
