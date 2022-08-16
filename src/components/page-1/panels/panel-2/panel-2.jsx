import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import useSound from 'use-sound';
import {PanelContainer} from './panel-2-styles'
import Book from '../../../../sounds/book.mp3';

export function Animation() {
    const [play, { stop }] = useSound(Book, {
        loop: true,
        playbackRate: 1.1,
        volume: 0.4,
    });

    const { rive, RiveComponent } = useRive({
        src: '/media/anims/page_1.riv',
        artboard: 'Panel 2',
        autoplay: true,
    });
  
    return ( 
      <RiveComponent onMouseEnter={() => play()} onMouseLeave={() => stop()}/>
    );
}

export default function panel4() {
    return (
        <PanelContainer>
            <Animation />
        </PanelContainer>
    )
}
