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
import TorchLeft from '../../Media/Images/TorchLeft_Off.svg';
import TorchRight from '../../Media/Images/TorchRight_Off.svg';
import TorchFlame from '../../Media/Images/TorchFlame.gif';
import Husker from '../../Media/Images/Husker.svg';
import HuskerHourglass from '../../Media/Images/Hourglass_Husker.svg';
import OwliverHourglass from '../../Media/Images/Hourglass_Oliver.svg';
import Owliver from '../../Media/Images/Owliver.svg';
import StatsHeader from '../../Media/Images/StatsHeader.svg';
import Terminal from '../../Media/Images/Terminal.svg';
import Thumb2 from '../../Media/Images/Thumb2.svg';
import Rive from 'rive-react';
import PuglasAdult from '../../Media/Animations/puglas_adult.riv';
import PuglasTeen from '../../Media/Animations/puglas_teen.riv';
import PuglasKid from '../../Media/Animations/puglas_kid.riv';

const Dungeon = () => {
        function MouseOver(event) {
            switch(event.target.id){
                case "owliver":
                    document.getElementById("owliverInfo").style.opacity = "1";
                break;
                case "husker":
                    document.getElementById("huskerInfo").style.opacity = "1";
                break;
            }
        }

        function MouseOut(event) {
            switch(event.target.id){
                case "owliver":
                    document.getElementById("owliverInfo").style.opacity = "0";
                break;
                case "husker":
                    document.getElementById("huskerInfo").style.opacity = "0";
                break;
            }
        }
        
        function EquipmentHover(event) {
            let infoTitle = document.getElementById("equipment-info").querySelector("span");
            let parent = event.target.parentElement;

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

            switch(parent.id){
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
            let options = ["Who am I?", "What are my hobbies?", "What is my favourite food?", "What is my favorite game?", "What do I use to create the comic?"];

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
                index = 4;
            }
            else{
                index--;
            }

            let terminal = document.getElementById("terminal-input");
            terminal.innerHTML = options[index];
        }

        function next(options){
            if(index == 4){
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
                        <PuglasContainer id="puglasContainer">
                            <img id="stand" src={Stand}/>
                            <Rive src={PuglasAdult} className='puglasAdult'/>
                            <Rive src={PuglasTeen} className='puglasTeen'/>
                            <Rive src={PuglasKid} className='puglasKid'/>
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
                <Parallax id="map-container-image" translateY={[0, -30]}>
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

                            <img src={Thumb2} id="pin1"/>
                            <div id='pin1Info'>
                                <p>The shoreline route is easy to traverse but inhabits many bandits</p>
                            </div>

                            <img src={Thumb2} id="pin2"/>
                            <div id='pin2Info'>
                                <p>Legend says that an ancient wizard lives in this forest</p>
                            </div>

                            <img src={Thumb2} id="pin3"/>
                            <div id='pin3Info'>
                                <p>Crossroads where many who travel to the ruins never return</p>
                            </div>

                            <img src={Thumb2} id="pin4"/>
                            <div id='pin4Info'>
                                <p>Mountain route that is hard to traverse but provides much safer travelling</p>
                            </div>

                            <img src={Thumb2} id="pin5"/>
                            <div id='pin5Info'>
                                <p>Frozen tundras where few people travel , let alone live</p>
                            </div>
                        </MapImage>
                    </MapSection>
                </Parallax>
                <SideCharactersSection>
                    <img id="bridge" src={Bridge}/>
                    <img onMouseEnter={MouseOver} onMouseLeave={MouseOut} id="husker" src={Husker}/>
                    <img id="husker-hourglass" src={HuskerHourglass}/>
                    <img onMouseEnter={MouseOver} onMouseLeave={MouseOut} id="owliver" src={Owliver}/>
                    <img id="owliver-hourglass" src={OwliverHourglass}/>
                    <img id="husker-torch-flame" src={TorchFlame}/>
                    <img id="husker-torch" src={TorchRight}/>
                    <img id="owliver-torch-flame" src={TorchFlame}/>
                    <img id="owliver-torch" src={TorchLeft}/>
                    <div id="huskerInfo">
                        <h2>Husker</h2>
                        <p>Age: 34 Years</p>
                    </div>
                    <div id="owliverInfo">
                        <h2>Owliver</h2>
                        <p>Age: 456 Years</p>
                    </div>
                </SideCharactersSection>
                <AboutSection tabIndex="0" onKeyDown={terminalToggle}>
                    <div id="terminal">
                        <img src={Terminal}/>
                        <span id="terminal-intro">What do you want to know about me?</span>
                        <div id="terminal-website"  onClick={()=> window.open("https://francois-smith.com", "_blank")}></div>
                        <div id="terminal-github"  onClick={()=> window.open("https://github.com/francois-smith", "_blank")}></div>
                        <div id="terminal-instagram"  onClick={()=> window.open("https://instagram.com/_francois.smith_", "_blank")}></div>
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
