import React from 'react';
import { Container, EquipmentSection, StatsSection, StatsContainer, SwordsContainer, Stat, PuglasContainer, SectionsContainer, MapSection, MapImage } from './DungeonStyles';
import DungeonImage from '../../Media/Images/Dungeon.svg';
import Fade from 'react-reveal/Fade';
import Pedestal from '../../Media/Images/Pedestal.svg';
import SwordImage from '../../Media/Images/Sword.svg';
import ScabbardImage from '../../Media/Images/Scabbard.svg';
import Stand from '../../Media/Images/Stand.svg';
import RangeSlider from '../Slider';
import { Parallax } from 'react-scroll-parallax';
import Map from '../../Media/Images/Map.svg';

const Dungeon = () => {
        return (
        <Container>
            <Parallax id="dungeon" translateY={[0, -20]} speed={10}>
                <img src={DungeonImage}/>;
            </Parallax>
            <SectionsContainer>
                <StatsSection>
                    <StatsContainer>
                        <SwordsContainer>
                            <Stat>
                                <span>AGILITY</span>
                                <img id='agility-sword' className='sword' src={SwordImage}/> 
                                <img className='scabbard' src={ScabbardImage}/> 
                            </Stat>    
                            <Stat>
                                <span>STEALTHINESS</span>
                                <img id='stealth-sword' className='sword' src={SwordImage}/> 
                                <img className='scabbard' src={ScabbardImage}/> 
                            </Stat>  
                            <Stat>
                                <span>CHARISMA</span>
                                <img id='char-sword' className='sword' src={SwordImage}/> 
                                <img className='scabbard' src={ScabbardImage}/> 
                            </Stat>  
                            <Stat>
                                <span>INTELLIGENCE</span>
                                <img id='intel-sword' className='sword' src={SwordImage}/> 
                                <img className='scabbard' src={ScabbardImage}/> 
                            </Stat>  
                            <Stat>
                                <span>STRENGTH</span>
                                <img id='strength-sword' className='sword' src={SwordImage}/> 
                                <img className='scabbard' src={ScabbardImage}/> 
                            </Stat>  
                            <Stat id="slider">
                                <RangeSlider/>
                            </Stat> 
                        </SwordsContainer>
                    </StatsContainer>
                    <PuglasContainer>
                        <img id="stand" src={Stand}/>
                        <img id='puglas'/>
                    </PuglasContainer>
                </StatsSection>
                <EquipmentSection>
                    <Fade bottom>
                        <img id='pedestalImage' src={Pedestal}/>
                    </Fade>
                </EquipmentSection>
                <MapSection>
                    <MapImage>
                        <img src={Map}/>
                        <div id='puglasTown'></div>
                    </MapImage>
                </MapSection>
            </SectionsContainer>
        </Container>
    );
};

export default Dungeon;
