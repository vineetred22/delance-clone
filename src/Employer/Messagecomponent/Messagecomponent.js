import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'
import { ReservedFooterComponent } from 'CommonComponent/ReservedFooterComponent/ReservedFooterComponent'
import { MenuDrawerBar } from 'CommonComponent/SideMenuBarComponent/MenuDrawerBar'
import Messages from 'Premdoc/Messages/Messages'
import React from 'react'

export const Messagecomponent = () => {
    return (
        <div>
            <HeaderMainLayout />
            <MenuDrawerBar>
                <Messages />
                <ReservedFooterComponent />
            </MenuDrawerBar>
            
        </div>
    )
}
