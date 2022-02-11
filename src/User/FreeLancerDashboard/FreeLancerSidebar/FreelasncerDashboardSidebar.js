import { HeaderMainLayout } from 'CommonComponent/HeaderMainLayout/HeaderMainLayout'
import { ReservedFooterComponent } from 'CommonComponent/ReservedFooterComponent/ReservedFooterComponent'
import React from 'react'
import { FreeLancerDashdhboardNotificationComponent } from '../freeLancerDashboardNotificationComponent/FreeLancerDashdhboardNotificationComponent'
import { FreeLancerReviewStatus } from '../freelancermainComponent/FreelancerReviewStatus/FreeLancerReviewStatus'


export const FreelasncerDashboardSidebar = () => {
    return (
        <div>
            <HeaderMainLayout />
        <FreeLancerReviewStatus/>
        
        <FreeLancerDashdhboardNotificationComponent/>
        <ReservedFooterComponent/>
        </div>
    )
}
