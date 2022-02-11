import { HighestRatedComponent } from "components/HomepageLayout/HighesRatedComponent/HighestRatedComponent";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { HighRatedDummy } from "../HighRatedDummy";
import { MainCarousel } from "../MainCarousel/MainCarousel";
import { User } from "../User";
// import { Item } from "./Item";

import './carousel.scss'

// import toastr from 'toastr';

// const { FOLLOW_TOPIC_FULFILLED,FOLLOW_TOPIC_INIT } = HomeActionTypes;

const breakPoints = [
  { width: 320, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];

export const ReactCarousel = () => {
return (
    <div className="react-lg-container px-lg-2">
      <div className="carousel-wrapper">
        <Carousel className="carousasel_main" breakPoints={breakPoints}>
        

             <div>  <HighestRatedComponent/> </div>
             
             <div>  <HighestRatedComponent/> </div>
             
             <div>  <HighestRatedComponent/> </div>
             
             <div>  <HighestRatedComponent/> </div>
             
             <div>  <HighestRatedComponent/> </div>
             
             <div>  <HighestRatedComponent/> </div>
          
           
          
        
        </Carousel>
      </div>
    </div>
  );
}



