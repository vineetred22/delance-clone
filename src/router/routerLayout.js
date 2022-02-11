import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout.js";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
//import HeaderMainLayout from "CommonComponent/HeaderMainLayout/HeaderMainLayout";

import GoTop from "CommonComponent/ScrollToTop/GoTo";
import { MenuDrawerBar } from "CommonComponent/SideMenuBarComponent/MenuDrawerBar.js";

import App from "../App.js";

export const PublicRouterLayout = ({ children }) => (
  <div className="">
    <div className="logo d-flex justify-content-center"></div>
    <strong className="mx-auto"></strong>

    {/* <HeaderMainLayout /> */}

    <GoTop scrollStepInPx="50" delayInMs="30" />
    {children}
  
      {/* <FooterLayout /> */}

  </div>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
