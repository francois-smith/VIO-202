import React from 'react'
import { PageContainer } from './page-3-styles'
import Panel1 from './panels/panel-1/panel-1'
import Panel3 from './panels/panel-3/panel-3'
import Panel4 from './panels/panel-4/panel-4'

function page5() {
    return (
        <PageContainer>
            <img id="page-3-background" src="/media/svgs/page-3/page-3-background.svg" alt="Page 3 background"/>
            <Panel1/>
            <img id="page-3-panel2" src="/media/svgs/page-3/page-3-panel2.svg" alt="Page 3 panel 2"/>
            <Panel3/>
            <Panel4/>
            <img id="page-3-panel5" src="/media/svgs/page-3/page-3-panel5.svg" alt="Page 3 panel 5"/>
            <img id="page-3-frames" src="/media/svgs/page-3/page-3-frames.svg" alt="Page 3 frames"/>
        </PageContainer>
    )
}

export default page5;