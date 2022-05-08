import React from 'react';
import { Container, MapContainer } from './MapStyles';
import MapImage from '../../Media/Images/Map.svg';

const Map = () => {
        return (
        <Container>
            <MapContainer>
                <img id='mapImage' src={MapImage}/>
            </MapContainer>
        </Container>
    );
};

export default Map;
