import React from 'react'
import { PageContainer } from './page-2-styles'
import Panel1 from './panels/panel-1/panel-1'
import Panel2 from './panels/panel-2/panel-2'
import Panel3 from './panels/panel-3/panel-3'
import Panel4 from './panels/panel-4/panel-4'

function page5() {
    return (
        <PageContainer>
            <Panel1/>
            <Panel2/>  
            <Panel3/>
            <Panel4/>  
            <img id="page-2-panel5" src="/media/svgs/page-2/page-2-panel5.svg" alt="Page 2 panel 5"/>
            <img id="page-2-frames" src="/media/svgs/page-2/page-2-frames.svg" alt="Page 2 frames"/>
            <img id="page-2-border" src="/media/svgs/page-2/page-2-border.svg" alt="Page 2 border"/>
        </PageContainer>
    )
}

export default page5;