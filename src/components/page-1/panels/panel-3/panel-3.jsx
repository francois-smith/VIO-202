import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import useSound from 'use-sound';
import {PanelContainer} from './panel-3-styles'
import Book from '../../../../sounds/book.mp3';

export function Animation() {
    const { rive, RiveComponent } = useRive({
        src: '/media/anims/page_1.riv',
        stateMachines: "State Machine 1",
        artboard: 'Panel 3',
        autoplay: true,
    });

    const [play, { stop }] = useSound(Book, {
        loop: true,
        playbackRate: 1.2,
        volume: 0.35,
    });
  
    const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
    const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

    const hoverAction = () => {
        hoverInput && hoverInput.fire();
        play();
    }

    const unhoverAction = () => {
        unHoverInput && unHoverInput.fire();
        stop()
    }
  
    return (
      <RiveComponent onMouseEnter={() => hoverAction()} onMouseLeave={() => unhoverAction()}/>
    );
}

export default function panel4() {
    return (
        <PanelContainer>
            <Animation />
        </PanelContainer>
    )
}
