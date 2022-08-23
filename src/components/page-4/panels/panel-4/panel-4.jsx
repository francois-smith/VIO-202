import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'
import useSound from 'use-sound';
import Fire from '../../../../sounds/fire.mp3';
import Portal from '../../../../sounds/portal.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_4.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 4',
		autoplay: true,
	});

	const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
	const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

	const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.6,
		playbackRate: 1.1,
	});

	const [playPortal, { stop: StopPortal }] = useSound(Portal, {
		loop: true,
		volume: 0.55,
        playbackRate: 0.9,
	});

	const hoverAction = () => {
		hoverInput && hoverInput.fire();
		playFire();
		playPortal();
	}

	const unhoverAction = () => {
		unHoverInput && unHoverInput.fire();
		stopFire();
		StopPortal();
	}
	
	return (
		<RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
	);
}
export default function panel4() {
	return (
		<PanelContainer>
			<Animation/>
			<div className='panel-bubble'>
                <img className='main-bubble' src="/media/svgs/page-4/bubble-page-4-panel-4.svg"/>
            </div>
		</PanelContainer>
	)
}

