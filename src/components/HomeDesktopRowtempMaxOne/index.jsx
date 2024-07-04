import { Img, Text } from "./..";
import React from "react";

export default function HomeDesktopRowtempMaxone({ 
  tempmax = "Temp max", 
  nineteen = "19°", 
  temperatureImage = "images/img vector.svg", 
  ...props 
}){ 
  return ( 
    <div {...props} className={`${props.className} flex justify-center items-center gap-4 md:gap-6 lg:gap-[26px] flex-1`}> 
      <div className="flex flex-1 flex-wrap justify-between gap-10 md:gap-4 lg:gap-36"> 
        <Text as="p" className="!text-white-a700 b2 lg:mr-2"> 
          {tempmax} 
        </Text> 
        <Text as="p">{nineteen}</Text> 
      </div> 
      <Img src={temperatureImage} alt="weather icon" className="h-[26px]" /> 
    </div> 
  );
}
