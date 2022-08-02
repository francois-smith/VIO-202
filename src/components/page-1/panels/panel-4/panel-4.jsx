import React from 'react'
import Rive from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'

export default function panel4() {
    return (
        <PanelContainer>
            <Rive src={"/media/anims/page-1-panel-4.riv"} />
            <img src="/media/svgs/page-1/bubble-page-1-panel-4.svg" className='panel-bubble'/>
        </PanelContainer>
    )
}
