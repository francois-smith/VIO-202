import React from 'react';
import { Container, EquipmentContainer } from './EquipmentStyles';
import Pedestal from '../../Media/Images/Pedestal.svg';

const Equipment = () => {
        return (
        <Container>
            <EquipmentContainer>
                <img id='pedestalImage' src={Pedestal}/>
            </EquipmentContainer>
        </Container>
    );
};

export default Equipment;
