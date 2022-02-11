
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
import { ReservedFooterComponent } from "CommonComponent/ReservedFooterComponent/ReservedFooterComponent";
import { MenuDrawerBar } from "CommonComponent/SideMenuBarComponent/MenuDrawerBar";
import { TabProjectcomponent } from "CommonComponent/TabComponent/TabProjectcomponent";
import React from "react";
import Postproject from "User/Project/Postproject/Postproject";

export const PostProject = () => {
  return (
    <div>
      <>
      <HeaderMainLayout />
      <MenuDrawerBar>
        <Postproject />
        <ReservedFooterComponent />
      </MenuDrawerBar>
       {/* <TabProjectcomponent /> */}
      </>
    </div>
  );
};
