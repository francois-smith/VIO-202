import React from 'react';
import {Container, StatsContainer, PuglasContainer, SwordsContainer, Stat} from './StatsStyles'
import SwordImage from '../../Media/Images/Sword.svg';
import ScabbardImage from '../../Media/Images/Scabbard.svg';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Stats = () => {
    document.addEventListener("DOMContentLoaded", function(event) {
        // -300 > x < 325
        setValues(255, 0, -100, 50, -300);
    });

    function setValues(value1, value2, value3, value4, value5){
        document.getElementById("agility-sword").style.transform = "TranslateX("+value1+"px)";
        document.getElementById("stealth-sword").style.transform = "TranslateX("+value2+"px)";
        document.getElementById("char-sword").style.transform = "TranslateX("+value3+"px)";
        document.getElementById("intel-sword").style.transform = "TranslateX("+value4+"px)";
        document.getElementById("strength-sword").style.transform = "TranslateX("+value5+"px)";
    }

    const CustomSlider = withStyles({
        root: {
            color: "#28a9f0",
            width: "90%",
        },
        track: {
            height: 5,
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: "#28a9f0",
            border: "none",
            marginTop: -9,
            marginLeft: -11,
            color: "#28a9f0",
        },
    })(Slider);

    return (
        <Container>
            <StatsContainer>
                <PuglasContainer>

                </PuglasContainer>
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
                </SwordsContainer>
            </StatsContainer>

            <CustomSlider id="sliderItem"
                aria-label="Custom marks"
                defaultValue={0}
                step={10}
                min={0}
                max={20}
            />
        </Container>
    );
};

export default Stats;
