import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-1-styles'

export function Echo() {
    const { rive, RiveComponent } = useRive({
      src: '/media/anims/page-2-panel-1.riv',
          stateMachines: "State Machine 1",
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
            <Echo/>
        </PanelContainer>
    )
}
