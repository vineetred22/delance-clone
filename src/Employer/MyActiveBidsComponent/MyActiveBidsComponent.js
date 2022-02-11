import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'
import { ReservedFooterComponent } from 'CommonComponent/ReservedFooterComponent/ReservedFooterComponent'
import { MenuDrawerBar } from 'CommonComponent/SideMenuBarComponent/MenuDrawerBar'
import React from 'react'
import { MyActiveBid } from 'User/Project/MyActiveBids/MyActiveBid'


export const MyActiveBidsComponent = () => {
    return (
        <div>
            <HeaderMainLayout />
            <MenuDrawerBar>
           <MyActiveBid/>
           <ReservedFooterComponent />
            </MenuDrawerBar>
        </div>
    )
}
