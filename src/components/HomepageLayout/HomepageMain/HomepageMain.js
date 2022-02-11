import { FooterLayout } from "CommonComponent/FooterLayout/FooterLayout";
import { HeaderMainLayout } from "CommonComponent/HeaderMainLayout/HeaderMainLayout";
import React from "react";
import homeback from "../../../assets/images/home-background-02.jpg";
import { CarouselComponent } from "../CarouselComponent/CarouselComponent";
import { MainCarousel } from "../CarouselComponent/MainCarousel/MainCarousel";
import {CategoryCompoent } from "../CategoryComponent/CategoryCompoent";
// import { CategeoryCompoent } from '../CategeoryComponent/CateGeoryCompoent';

import { FeatureComponentPage } from "../FeatureComponent/FeatureComponentPage";
import { FeatureCitiComponent } from "../FeaturedCitiComponent/FeatureCitiComponent";
import { HighestRatedComponent } from "../HighesRatedComponent/HighestRatedComponent";
// import { MemberPlan } from '../MemberPlanComponent/MemberPlan'
import { SearchPageComponent } from "../SearchPageComponent/SearchPageComponent";


const HomepageMain = () => {
  return (
    <>
      <div>
        <HeaderMainLayout />
        <SearchPageComponent />
      
        <CategoryCompoent />
     
      </div>

      <FeatureComponentPage />
      {/* <FeatureCitiComponent/> */}
      {/* <HighestRatedComponent/> */}
      {/* <CarouselComponent/> */}
      <MainCarousel />
      <FooterLayout />
    </>
  );
};

export default HomepageMain;
