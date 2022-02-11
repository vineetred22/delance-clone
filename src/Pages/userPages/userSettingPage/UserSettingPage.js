import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'
import { MenuDrawerBar } from 'CommonComponent/SideMenuBarComponent/MenuDrawerBar'
import React from 'react'
import { UserSettingSideComponent } from 'User/UserSettingComponent/UserSettingSideComponent/UserSettingSideComponent'

export const UserSettingPage = () => {
    return (
         <>
         
          <MenuDrawerBar>
            <HeaderMainLayout />
            <UserSettingSideComponent/>
          </MenuDrawerBar>
          
         </>
    )
}
