import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-3-styles'
import useSound from 'use-sound';
import Hmm from '../../../../sounds/hmmm.mp3';
import Fire from '../../../../sounds/fire.mp3';

export function Animation() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page_2.riv',
        artboard: 'Panel 3',
        autoplay: true,
    });
  
    const [play, { stop }] = useSound(Hmm, {
		loop: false,
		volume: 0.5,
	});

    const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.55,
		playbackRate: 1.25,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const hoverAction = () => {
        hoverInput && hoverInput.fire();
        play();
        playFire();
    }

    const unhoverAction = () => {
        unHoverInput && unHoverInput.fire();
        stop();
        stopFire();
    }
  
    return (
      <RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
}

export default function panel4() {
    return (
        <PanelContainer>
            <Animation />
            <div className='panel-bubble'>
                <img className='main-bubble' src="/media/svgs/page-2/bubble-page-2-panel-3.svg"/>
                <img className='small-1' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-2' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-3' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-4' src="/media/svgs/page-2/small-bubbles.svg"/>
            </div>
        </PanelContainer>
    )
}