import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-1-styles'
import useSound from 'use-sound';
import Crack from '../../../../sounds/crack.mp3'

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_3.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 1',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playCrack, { stop: stopCrack }] = useSound(Crack, {
		loop: true,
		volume: 0.5,
		playbackRate: 1,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playCrack();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopCrack();
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
