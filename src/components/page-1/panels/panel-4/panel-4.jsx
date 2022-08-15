import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'

export function Animation() {
  const { rive, RiveComponent } = useRive({
    src: '/media/anims/page-1-panel-4.riv',
        stateMachines: "State Machine 1",
        artboard: 'Panel 4',
        autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
  const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

  return (
    <RiveComponent onMouseEnter={() => hoverInput && hoverInput.fire()} onMouseLeave={() => unHoverInput && unHoverInput.fire()}/>
  );
}

export default function panel4() {
    return (
        <PanelContainer>
            <Animation />
            <img src="/media/svgs/page-1/bubble-page-1-panel-4.svg" className='panel-bubble'/>
        </PanelContainer>
    )
}
