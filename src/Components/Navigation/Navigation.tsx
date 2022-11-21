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
                        <div className="dropdownMenu">
                            <li className="first">
                                <Link href='#ProjectsSection'>
                                    PROJECTS
                                </Link>
                                <div className='sublist'>
                                    <a href='#Theme2'>
                                        Theme 2
                                    </a>
                                    <a href='#Theme3'>
                                        Theme 3
                                    </a>
                                </div>
                            </li>  
                            {/* dropdown sub list */}
                            
                        </div>
                    </div>
                </NavigationLinks>
            </NavigationContainer>
            <Burger/>
        </Navigation>
    );
};

export default Header;
