import React from "react";
import { Text,Img } from "./..";

export default function HomeDesktopForecastcard({ time = "09:00", snow = "Snow", nineteen = "19°", ...props }) {
return ( 
 <div {...props} className={ `${props.className} flex justify-center items-center flex-1`}> 
 <div className="flex flex-1 items-center justify-between gap-5"> 
 <Img src="images/ing 32 snow.svg" alt="weather icon" className="h-[48px] w-[48px]" /> 
 <div className="flex w-[74%] flex-col items-start"> 
 <Text as="p">{time}</Text> 
 <Text as="p" className="!text-white-a700_b2"> 
    {snow}
    </Text>
 </div> 
 </div> 
 <Text size="texts" as="p" className="!text-white-a760 _b2"> 
 {nineteen} 
 </Text> 
 </div> 
) 
}
