import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-3-styles'
import useSound from 'use-sound';
import Fire from '../../../../sounds/fire.mp3';
import Hmmm from '../../../../sounds/combat_hmm.mp3';

export function Animation() {
	const { rive, RiveComponent } = useRive({
		src: '/media/anims/page_3.riv',
		stateMachines: "State Machine 1",
		artboard: 'Panel 3',
		autoplay: true,
	});


	const [playFire, { stop: stopFire }] = useSound(Fire, {
		loop: true,
		volume: 0.8,
		playbackRate: 1.25,
	});

	const [playHa, { stop: stopHa }] = useSound(Hmmm, {
		loop: false,
		volume: 0.5,
		playbackRate: 0.85,
	});

	const hoverAction = () => {
		playFire();
		playHa();
	}

	const unhoverAction = () => {
		stopFire();
		stopHa();
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
                <img className='main-bubble' src="/media/svgs/page-3/bubble-page-3-panel-3.svg"/>
                <img className='small-1' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-2' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-3' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-4' src="/media/svgs/page-2/small-bubbles.svg"/>
            </div>
		</PanelContainer>
	)
}
