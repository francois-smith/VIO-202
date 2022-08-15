import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-3-styles'

export function Animation() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page_2.riv',
        artboard: 'Panel 3',
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
                <img className='main-bubble' src="/media/svgs/page-2/bubble-page-2-panel-3.svg"/>
                <img className='small-1' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-2' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-3' src="/media/svgs/page-2/small-bubbles.svg"/>
                <img className='small-4' src="/media/svgs/page-2/small-bubbles.svg"/>
            </div>
        </PanelContainer>
    )
}