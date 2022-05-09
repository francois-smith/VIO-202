import React from 'react';
import { Container} from './DungeonStyles';
import DungeonImage from '../../Media/Images/Dungeon.svg';

const Dungeon = () => {
        return (
        <Container>
            <img src={DungeonImage}/>;
        </Container>
    );
};

export default Dungeon;
