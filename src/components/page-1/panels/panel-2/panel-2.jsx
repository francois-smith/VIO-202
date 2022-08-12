import React from 'react'
import Rive from '@rive-app/react-canvas';
import {PanelContainer} from './panel-2-styles'

export default function panel4() {
    return (
        <PanelContainer>
            <Rive src={"/media/anims/page-1-panel-2.riv"} />
        </PanelContainer>
    )
}
