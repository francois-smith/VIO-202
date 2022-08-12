import React from 'react'
import { PageContainer } from './page-1-styles'
import Panel2 from './panels/panel-2/panel-2'
import Panel4 from './panels/panel-4/panel-4'
import Panel6 from './panels/panel-6/panel-6'

function page5() {
    return (
        <PageContainer>
            <img id="page-1-background" src="/media/svgs/page-1/page-1-background.svg" alt="Page 1 background"/>
            <img id="page-1-panel5" src="/media/svgs/page-1/page-1-panel5.svg" alt="Page 1 panel 5"/>
            <img id="page-1-panel1" src="/media/svgs/page-1/page-1-panel1.svg" alt="Page 1 panel 1"/>
            <Panel2/>
            <img id="page-1-panel3" src="/media/svgs/page-1/page-1-panel3.svg" alt="Page 1 panel 3"/>
            <Panel4/>
            <Panel6/>
            <img id="page-1-frames" src="/media/svgs/page-1/page-1-frames.svg" alt="Page 1 frames"/>
            
        </PageContainer>
    )
}

export default page5;