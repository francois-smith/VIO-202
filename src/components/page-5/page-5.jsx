import React from 'react'
import { PageContainer } from './page-5-styles'
import Panel1 from './panels/panel-1/panel-1'
import Panel2 from './panels/panel-2/panel-2'
import PanelFinal from './panels/panel-final/panel-final'

function page5() {
    return (
        <PageContainer>
            <img id="page-5-panel3" src="/media/svgs/page-5/page-5-panel3.svg" alt="Page 5 panel 3"/>
            <Panel1/>
            <Panel2/>
            <PanelFinal/>
            <img id="page-5-frames" src="/media/svgs/page-5/page-5-frames.svg" alt="Page 5 frames"/>
        </PageContainer>
    )
}

export default page5;