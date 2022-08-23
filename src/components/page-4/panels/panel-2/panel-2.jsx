import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-2-styles'
import useSound from 'use-sound';
import Lever from '../../../../sounds/lever.mp3'

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_4.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 2',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playLever, { stop: stopLever }] = useSound(Lever, {
		loop: false,
		volume: 0.5,
		playbackRate: 1.1,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playLever();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopLever();
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
