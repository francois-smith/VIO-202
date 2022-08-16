import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-2-styles'
import useSound from 'use-sound';
import Drip from '../../../../sounds/drip.mp3';
import Fire from '../../../../sounds/fire.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_2.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 2',
		autoplay: true,
	});

	const [playDrip, { stop: stopDrip }] = useSound(Drip, {
		loop: true,
		volume: 0.8,
	});

	const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.37,
		playbackRate: 1.25,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playDrip();
		playFire();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopDrip();
		stopFire();
	}
	
	return (
		<RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
	);
}

export default function panel2() {
	return (
		<PanelContainer>
			<Animation />
		</PanelContainer>
	)
}
