import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-2-styles'
import useSound from 'use-sound';
import Hmmm from '../../../../sounds/combat_hmm.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_5.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 2',
		autoplay: true,
	});

	const [playHmm, { stop: stopHmm }] = useSound(Hmmm, {
		loop: false,
		volume: 0.3,
		playbackRate: 1,
	});

	const hoverAction = () => {
		playHmm();
	}

	const unhoverAction = () => {
		stopHmm();
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
                <img className='main-bubble' src="/media/svgs/page-5/bubble-page-5-panel2.svg"/>
            </div>
		</PanelContainer>
	)
}
