import { Img, Text } from "./..";
import React from "react";

export default function HomeDesktopBgweather({ searchBarValue, temperature, localtime, ...props }) {
    const tempValue = parseFloat(temperature);
    const backgroundImageUrl = tempValue > 25 
        ? '/images/bg_sunny.jpg' 
        : '/images/main_bg.png';

    return (
        <div
            {...props}
            className={`${props.className} flex justify-center items-start w-full h-screen left-0 top-0 p-9 m-auto sm:p-5 bg-cover bg-no-repeat flex-1 absolute`}
            style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="mb-12 flex w-[88%] flex-col  items-start lg:gap-[468px] md:w-full  md:gap-[468px] sm:gap-[10px] text-white">
                <Img src="images/logo.png" alt="logo image" className="h-[51px] w-[88px] object-contain" />
                <div className="flex max-w-fit items-center md:w-full sm:flex-col sm:items-start">
                    <Text size="textlg" as="p" className=" tracking-normal lg:mb-10 md:mb-8 sm:mb-0 max-w-fit">
                        {temperature}
                    </Text>
                    <div className="flex-col justify-center sm:self-stretch max-w-fit">
                        <Text size="textmd" as="p" className="mb-2">
                            {searchBarValue?.length > 0 ? searchBarValue : "Islamabad"}
                        </Text>
                        <Text as="p" className="ml-1 md:ml-0">
                            {localtime}
                        </Text>
                    </div>
                    <Img
                        src="images/weather.svg"
                        alt="weather image"
                        className="h-[70px] w-[70px] hidden sm:block"
                    />
                </div>
            </div>
        </div>
    );
}
