import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'
import useSound from 'use-sound';
import Swoosh from '../../../../sounds/swoosh.mp3';
import Crack from '../../../../sounds/crack.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_3.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 4',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playSwoosh, { stop: stopSwoosh }] = useSound(Swoosh, {
		loop: false,
		volume: 0.15,
		playbackRate: 1.4,
	});

	const [playCrack, { stop: stopCrack }] = useSound(Crack, {
		loop: false,
		volume: 0.4,
		playbackRate: 1.8,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playSwoosh();
		playCrack();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopSwoosh();
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
