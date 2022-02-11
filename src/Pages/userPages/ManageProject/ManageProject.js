import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
import { ReservedFooterComponent } from "CommonComponent/ReservedFooterComponent/ReservedFooterComponent";
import { MenuDrawerBar } from "CommonComponent/SideMenuBarComponent/MenuDrawerBar";
import React from "react";
import { ManageProjects } from "User/ManageProject/ManageProjects";

export const ManageProject = () => {
  return (
    <>
      <HeaderMainLayout />
      <MenuDrawerBar>
        <ManageProjects />
        <ReservedFooterComponent />
      </MenuDrawerBar>
    </>
  );
};
