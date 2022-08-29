import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-final-styles'
import useSound from 'use-sound';
import Hmmm from '../../../../sounds/combat_hmm.mp3';
import Gasp from '../../../../sounds/gasp.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_5.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel Final',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playHa, { stop: stopHa }] = useSound(Hmmm, {
		loop: false,
		volume: 0.25,
		playbackRate: 1.05,
	});

	const [playGasp, { stop: stopGasp }] = useSound(Gasp, {
		loop: false,
		volume: 0.2,
		playbackRate: 0.9,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playHa();
		playGasp();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopHa();
		stopGasp();
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
