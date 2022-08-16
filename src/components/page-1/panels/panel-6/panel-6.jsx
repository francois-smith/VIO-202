import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-6-styles'
import useSound from 'use-sound';
import Sigh from '../../../../sounds/sigh2.mp3';

export function Animation() {
    const { rive, RiveComponent } = useRive({
        src: '/media/anims/page_1.riv',
        artboard: 'Panel 6',
        autoplay: true,
    });
  
    const [play, { stop }] = useSound(Sigh, {
		loop: false,
		volume: 0.3,
        playbackRate: 0.75,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const hoverAction = () => {
        hoverInput && hoverInput.fire();
        play();
    }

    const unhoverAction = () => {
        unHoverInput && unHoverInput.fire();
        stop()
    }
  
    return (
      <RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
}

export default function panel6() {
    return (
        <PanelContainer>
            <Animation />
            <div className='panel-bubble'>
                <img src="/media/svgs/page-1/bubble-page-1-panel-6.svg"/>
                <p><span className='one'>I’m going</span> <span className='two'>to regret</span><br/><span className='three'>going</span> <span className='four'>into that</span> <span className='five'>aren’t I</span><span className='six'>...</span></p>
            </div>
        </PanelContainer>
    )
}

