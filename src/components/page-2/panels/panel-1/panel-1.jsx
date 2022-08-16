import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-1-styles'
import useSound from 'use-sound';
import Fire from '../../../../sounds/fire.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_2.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 1',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	// const [play, { stop }] = useSound(Sigh, {
	// 	loop: false,
	// 	volume: 0.2,
	// });

	const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.8,
		playbackRate: 1.25,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		//play();
		playFire();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		//stop();
		stopFire();
	}
	
	return (
		<RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
	);
}

export default function panel4() {
	return (
		<PanelContainer>
			<Animation/>
		</PanelContainer>
	)
}
