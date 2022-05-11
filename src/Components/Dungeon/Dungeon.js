import React from 'react';
import { Container, EquipmentSection, StatsSection, StatsContainer, SwordsContainer, Stat, PuglasContainer, SectionsContainer, MapSection, MapImage, SideCharactersSection, AboutSection } from './DungeonStyles';
import DungeonImage from '../../Media/Images/Dungeon.svg';
import Fade from 'react-reveal/Fade';
import Pedestal from '../../Media/Images/Pedestal.svg';
import SwordPedastal from '../../Media/Images/PedastalSword.svg';
import BookPedastal from '../../Media/Images/PedastalBook.svg';
import TorchPedastal from '../../Media/Images/PedastalTorch.svg';
import SwordImage from '../../Media/Images/Sword.svg';
import ScabbardImage from '../../Media/Images/Scabbard.svg';
import Stand from '../../Media/Images/Stand.svg';
import RangeSlider from '../Slider';
import { Parallax } from 'react-scroll-parallax';
import Map from '../../Media/Images/Map.svg';
import Bridge from '../../Media/Images/Bridge.svg';
import TorchLeftOff from '../../Media/Images/TorchLeft_Off.svg';
import TorchLeftOn from '../../Media/Images/TorchLeft_On.svg';
import TorchRightOff from '../../Media/Images/TorchRight_Off.svg';
import TorchRightOn from '../../Media/Images/TorchRight_On.svg';
import Husker from '../../Media/Images/Husker.svg';
import Owliver from '../../Media/Images/Owliver.svg';

const Dungeon = () => {
        function MouseOver(event) {
            let torch;

            switch(event.target.id){
                case "owliver":
                    torch = document.getElementById("owliver-torch");
                    torch.src = TorchLeftOn;
                    torch.style.height = "260px";
                    torch.style.top = "210px";
                break;
                case "husker":
                    torch = document.getElementById("husker-torch");
                    torch.src = TorchRightOn;
                    torch.style.height = "260px";
                    torch.style.top = "60px";
                break;
            }
        }

        function MouseOut(event) {
            let torch;

            switch(event.target.id){
                case "owliver":
                    torch = document.getElementById("owliver-torch");
                    torch.src = TorchLeftOff;
                    torch.style.height = "150px";
                    torch.style.top = "320px";
                break;
                case "husker":
                    torch = document.getElementById("husker-torch");
                    torch.src = TorchRightOff;
                    torch.style.height = "150px";
                    torch.style.top = "170px";
                break;
            }
        }

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
                        <div  id='SwordPedastal' className='equipment_item'>
                            <img src={SwordPedastal}/>
                        </div>
                        <div id='TorchPedastal' className='equipment_item'>
                            <img src={TorchPedastal}/>
                        </div>
                        <div id='BookPedastal' className='equipment_item'>
                            <img src={BookPedastal}/>
                        </div>
                    </Fade>
                </EquipmentSection>
                <MapSection>
                    <MapImage>
                        <img src={Map}/>
                        <div id='puglasTown'></div>
                    </MapImage>
                </MapSection>
                <SideCharactersSection>
                    <img id="bridge" src={Bridge}/>
                    <img onMouseOver={MouseOver} onMouseLeave={MouseOut} id="husker" src={Husker}/>
                    <img onMouseOver={MouseOver} onMouseLeave={MouseOut} id="owliver" src={Owliver}/>
                    <img id="husker-torch" src={TorchRightOff}/>
                    <img id="owliver-torch" src={TorchLeftOff}/>
                </SideCharactersSection>
                <AboutSection>

                </AboutSection>
            </SectionsContainer>
        </Container>
    );
};

export default Dungeon;
