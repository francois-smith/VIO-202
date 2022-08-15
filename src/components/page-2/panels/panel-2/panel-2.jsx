import React from 'react'
import Rive, { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {PanelContainer} from './panel-2-styles'

export function Drops() {
  const { rive, RiveComponent } = useRive({
    src: '/media/anims/page-2-panel-2-drops.riv',
        stateMachines: "State Machine 1",
        autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, "State Machine 1", "Hover");
  const unHoverInput = useStateMachineInput(rive, "State Machine 1", "unHover");

  return (
    <RiveComponent onMouseEnter={() => hoverInput && hoverInput.fire()} onMouseLeave={() => unHoverInput && unHoverInput.fire()}/>
  );
}

export default function panel2() {
    return (
        <PanelContainer>
            <Rive src={"/media/anims/page-2-panel-2.riv"} />
            <Drops/>
        </PanelContainer>
    )
}
