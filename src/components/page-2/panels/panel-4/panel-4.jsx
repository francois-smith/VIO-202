import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'

export function Animation() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page_2.riv',
          artboard: 'Panel 4',
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
            <div className='panel-bubble'>
                <img className='main-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-1.svg"/>
                <img className='second-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-2.svg"/>
            </div>
        </PanelContainer>
    )
}

