import { createRef, useCallback, useEffect, useState, React } from 'react';
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
import StatsHeader from '../../Media/Images/StatsHeader.svg';
import Terminal from '../../Media/Images/Terminal.svg';

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
        
        function EquipmentHover(event) {
            let infoTitle = document.getElementById("equipment-info").querySelector("span");

            switch(event.target.id){
                case "SwordPedastal":
                    infoTitle.innerHTML = "Iron Sword";
                    infoTitle.parentElement.style.left = "30px";
                    infoTitle.parentElement.style.top = "220px";
                break;
                case "TorchPedastal":
                    infoTitle.innerHTML = "Wooden Torch";
                    infoTitle.parentElement.style.left = "25px";
                    infoTitle.parentElement.style.top = "225px";
                break;
                case "BookPedastal":
                    infoTitle.innerHTML = "Mysterious Journal";
                    infoTitle.parentElement.style.left = "22px";
                    infoTitle.parentElement.style.top = "235px";
                break;
            }
        }

        function EquipmentLeave(event) {
            let infoTitle = document.getElementById("equipment-info").querySelector("span");
            infoTitle.innerHTML = "";
            infoTitle.parentElement.style.left = "30px";
            infoTitle.parentElement.style.top = "220px";
        }

        let index = 0;
        function terminalToggle(event){
            let options = ["Who am I?", "What are my hobbies?", "What is my favourite food?", "What is my favorite game?", "What inspired Betrayal?", "What degree do you study?"];

            switch(event.key){
                case "ArrowRight":
                    next(options);
                break;
                case "ArrowLeft":
                    previous(options);
                break;
            }
        }

        function previous(options){
            if(index == 0){
                index = 5;
            }
            else{
                index--;
            }

            let terminal = document.getElementById("terminal-input");
            terminal.innerHTML = options[index];
        }

        function next(options){
            if(index == 5){
                index = 0;
            }
            else{
                index++;
            }

            let terminal = document.getElementById("terminal-input");
            terminal.innerHTML = options[index];
        }

        return (
        <Container>
            <Parallax id="dungeon" translateY={[-1, -20]} speed={10}>
                <img src={DungeonImage}/>;
            </Parallax>
            <SectionsContainer>
                <StatsSection>
                    <img id='stats-header' src={StatsHeader}/> 
                    <div id="statsTemp">
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
                    </div>
                </StatsSection>
                <EquipmentSection>
                    <Fade bottom>
                        <div id="pedestal-container">
                            <img id='pedestalImage' src={Pedestal}/>
                            <div id="equipment-info">
                                <span></span>
                            </div>
                        </div>
                        <div onMouseOver={EquipmentHover} onMouseLeave={EquipmentLeave} id='SwordPedastal' className='equipment_item'>
                            <img src={SwordPedastal}/>
                        </div>
                        <div onMouseOver={EquipmentHover} onMouseLeave={EquipmentLeave} id='TorchPedastal' className='equipment_item'>
                            <img src={TorchPedastal}/>
                        </div>
                        <div onMouseOver={EquipmentHover} onMouseLeave={EquipmentLeave} id='BookPedastal' className='equipment_item'>
                            <img src={BookPedastal}/>
                        </div>
                    </Fade>
                    
                </EquipmentSection>
                <MapSection>
                    <MapImage>
                        <img src={Map}/>

                        <div id='puglasTown'></div>
                        <div id='puglasTownInfo'>
                            <h3>Coldview</h3>
                            <p>Home of the main character of the story</p>
                        </div>
                        
                        <div id='mainTown'></div>
                        <div id='mainTownInfo'>
                            <h3>Aramore</h3>
                            <p>The location where our adventure begins</p>
                        </div>

                        <div id='ruins'></div>
                        <div id='ruinsInfo'>
                            <h3>Mysterious Ruins</h3>
                            <p>Ancient ruins that no one dares exploring</p>
                        </div>
                    </MapImage>
                </MapSection>
                <SideCharactersSection>
                    <img id="bridge" src={Bridge}/>
                    <img onMouseEnter={MouseOver} onMouseLeave={MouseOut} id="husker" src={Husker}/>
                    <img onMouseEnter={MouseOver} onMouseLeave={MouseOut} id="owliver" src={Owliver}/>
                    <img id="husker-torch" src={TorchRightOff}/>
                    <img id="owliver-torch" src={TorchLeftOff}/>
                </SideCharactersSection>
                <AboutSection tabIndex="0" onKeyDown={terminalToggle}>
                    <div id="terminal">
                        <img src={Terminal}/>
                        <span id="terminal-intro">What do you want to know about me?</span>
                        <span id="terminal-icon">&#8250;</span>
                        <span id="terminal-hint">Hint: Use Left and Right Arrow Keys</span>
                        <span id="terminal-input">Who am I?</span>
                    </div>
                </AboutSection>
            </SectionsContainer>
        </Container>
    );
};

export default Dungeon;
