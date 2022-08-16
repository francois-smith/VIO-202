import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'
import useSound from 'use-sound';
import Walk from '../../../../sounds/walk.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page-1-panel-4.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 4',
		autoplay: true,
	});

	const [play, { stop }] = useSound(Walk, {
		loop: false,
		playbackRate: 0.9,
		volume: 0.5,
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

export default function panel4() {
	return (
		<PanelContainer>
			<Animation />
			<img src="/media/svgs/page-1/bubble-page-1-panel-4.svg" className='panel-bubble'/>
		</PanelContainer>
	)
}