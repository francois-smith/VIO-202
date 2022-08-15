import React from 'react'
import Rive from '@rive-app/react-canvas';
import {PanelContainer} from './panel-3-styles'

export default function panel4() {
    return (
        <PanelContainer>
            <Rive src={"/media/anims/page-1-panel-3.riv"} />
        </PanelContainer>
    )
}
