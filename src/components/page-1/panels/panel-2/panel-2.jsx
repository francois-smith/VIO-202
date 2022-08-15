import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import useSound from 'use-sound';
import {PanelContainer} from './panel-2-styles'

export function Animation() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page_1.riv',
          artboard: 'Panel 2',
          autoplay: true,
    });
  
    return (
      <RiveComponent/>
    );
}

export default function panel4() {
    return (
        <PanelContainer>
            <Animation />
        </PanelContainer>
    )
}
