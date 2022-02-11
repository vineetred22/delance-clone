import { Typography } from "@material-ui/core";
import users from "../../../assets/images/user-avatar-small-02.jpg";
import users1 from "../../../assets/images/userimg.jpg";
import users2 from "../../../assets/images/user-avatar-big-02.jpg";
import { MenuDrawerBar } from "CommonComponent/SideMenuBarComponent/MenuDrawerBar";
import React from "react";
import { Currentproject } from "User/Project/CurrentProjects/CurrentProjects";
import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout";
import { ReservedFooterComponent } from "CommonComponent/ReservedFooterComponent/ReservedFooterComponent";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";


export const CurrentProject = () => {
  return (
    <div>
      <HeaderMainLayout />
      <MenuDrawerBar>
        <Typography variant="h4"> Current Projects</Typography>
        <Currentproject
          name="Garima Mali"
          userimg={users}
          time="5:45 pm "
        />
        <Currentproject
          name="Vinay Jain"
          userimg={users1}
          time="9:45 am "
        />
        <Currentproject
          name="kishan Dangi"
          userimg={users2}
          time="2:00 pm "
        />
        <ReservedFooterComponent />
      </MenuDrawerBar>
    </div>
  );
};
