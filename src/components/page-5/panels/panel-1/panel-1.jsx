import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-1-styles'
import useSound from 'use-sound';
import Fire from '../../../../sounds/fire.mp3';
import Walk from '../../../../sounds/walk2.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_5.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 1',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.8,
		playbackRate: 1.25,
	});

	const [playWalk, { stop: stopWalk }] = useSound(Walk, {
		loop: false,
		volume: 0.4,
		playbackRate: 0.8,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playFire();
		playWalk();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopFire();
		stopWalk();
	}
	
	return (
		<RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
	);
}
export default function panel4() {
	return (
		<PanelContainer>
			<Animation/>
			<div className='panel-bubble-1'>
				<img className='main-bubble-1' src="/media/svgs/page-5/bubble-page-5-panel1-1.svg"/>
            </div>
			<div className='panel-bubble-2'>
				<img className='main-bubble-2' src="/media/svgs/page-5/bubble-page-5-panel1-2.svg"/>
            </div>
		</PanelContainer>
	)
}
