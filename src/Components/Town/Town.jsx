import React from 'react';
import TownImage from '../../Media/Images/Town.svg';
import { Container } from './TownStyles';
import { Parallax } from 'react-scroll-parallax';
import Clouds from '../../Media/Images/Clouds.svg';
import Logo from '../../Media/Images/Logo.svg';

const Town = () => {
        return (
        <Container>
            <Parallax id="clouds" translateY={[60, -30]} speed={5}>
                <img src={Clouds}/>;
            </Parallax>
            <Parallax translateY={[-10, 20]}>
                <img id="town" src={TownImage}/>;
            </Parallax>
            <Parallax id="logo" translateY={0} translateX={[-40, 25]} speed={200}>
                <img src={Logo}/>;
            </Parallax>
        </Container>
    );
};

export default Town;
