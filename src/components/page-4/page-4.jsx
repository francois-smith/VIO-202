import React from 'react'
import { PageContainer } from './page-4-styles'
import Panel2 from './panels/panel-2/panel-2'
import Panel4 from './panels/panel-4/panel-4'
import Panel5 from './panels/panel-5/panel-5'

function page5() {
    return (
        <PageContainer>
            <img id="page-4-background" src="/media/svgs/page-4/page-4-background.svg" alt="Page 4 background"/>
            <img id="page-4-panel1" src="/media/svgs/page-4/page-4-panel1.svg" alt="Page 4 panel 1"/>
            <Panel2/>
            <img id="page-4-panel3" src="/media/svgs/page-4/page-4-panel3.svg" alt="Page 4 panel 3"/>
            <Panel4/>
            <Panel5/>
            <img id="page-4-frames" src="/media/svgs/page-4/page-4-frames.svg" alt="Page 4 frames"/>
        </PageContainer>
    )
}

export default page5;