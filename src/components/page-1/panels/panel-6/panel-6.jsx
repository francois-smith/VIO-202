import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-6-styles'

export function Animation() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page_1.riv',
          artboard: 'Panel 6',
          autoplay: true,
    });
  
    return (
      <RiveComponent />
    );
}

export default function panel6() {
    return (
        <PanelContainer>
            <Animation />
            <div className='panel-bubble'>
                <img src="/media/svgs/page-1/bubble-page-1-panel-6.svg"/>
                <p><span className='one'>I’m going</span> <span className='two'>to regret</span><br/><span className='three'>going</span> <span className='four'>into that</span> <span className='five'>aren’t I</span><span className='six'>...</span></p>
            </div>
        </PanelContainer>
    )
}

