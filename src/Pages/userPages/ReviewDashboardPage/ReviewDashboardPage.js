const { MenuDrawerBar } = require("CommonComponent/SideMenuBarComponent/MenuDrawerBar")
const { UserReviewComponent } = require("User/UserReview/UserReviewComponent")

export  const ReviewDashboardPage=()=>{
    return(
        <>
          <MenuDrawerBar>
              <UserReviewComponent/>
          </MenuDrawerBar>
        </>
    )
}