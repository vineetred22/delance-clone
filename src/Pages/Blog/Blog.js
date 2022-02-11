import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
import Pagesblog from "Premdoc/Pagesblog/Pagesblog";
import React from "react";

export const Blog = () => {
  return (
    <div>
      <HeaderMainLayout />
        <Pagesblog />
     
      <FooterLayout />
    </div>
  );
};
