import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'
import useSound from 'use-sound';
import Fire from '../../../../sounds/fire.mp3';
import Sigh from '../../../../sounds/sigh2.mp3';

export function Animation() {
    const { rive, RiveComponent } = useRive({
        src: '/media/anims/page_2.riv',
        artboard: 'Panel 4',
        autoplay: true,
    });
  
    const [play, { stop }] = useSound(Sigh, {
		loop: false,
		volume: 0.2,
	});

    const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.68,
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
                <img className='main-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-1.svg"/>
                <img className='second-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-2.svg"/>
            </div>
        </PanelContainer>
    )
}

