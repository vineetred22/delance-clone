import { Box } from '@material-ui/core'
import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'
import { ReservedFooterComponent } from 'CommonComponent/ReservedFooterComponent/ReservedFooterComponent'
import { MenuDrawerBar } from 'CommonComponent/SideMenuBarComponent/MenuDrawerBar'
import React from 'react'
import { Link } from 'react-router-dom'
import ManageBidders from 'User/Project/ManageBidders/ManageBidders'


export const ManageBidderComponent = () => {
    return (
        <div>
           <HeaderMainLayout />
            <MenuDrawerBar>
            <div className="dashboard-headline">
            <h3>Manage Bidders</h3>
            <Box className="dash_bidd">
              Bids for{" "}
              <Link className="feedtext">Food Delivery Mobile Application</Link>
            </Box>
          </div>
                <ManageBidders/>
               <ReservedFooterComponent />
            </MenuDrawerBar>
        </div>
    )
}
