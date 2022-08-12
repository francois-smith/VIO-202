import React from 'react'
import Rive from '@rive-app/react-canvas';
import {PanelContainer} from './panel-4-styles'

export default function panel4() {
    return (
        <PanelContainer>
            <Rive src={"/media/anims/page-2-panel-4.riv"} />
            <div className='panel-bubble'>
                <img className='main-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-1.svg"/>
                <img className='second-bubble' src="/media/svgs/page-2/bubble-page-2-panel-4-2.svg"/>
            </div>
        </PanelContainer>
    )
    //
}
