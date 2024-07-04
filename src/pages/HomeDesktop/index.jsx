import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Input, Img } from "../../components";
import HomeDesktopBgweather from "../../components/HomeDesktopBgweather";
import HomeDesktopRowtempMaxOne from "../../components/HomeDesktopRowtempMaxOne";
import React, { Suspense, useEffect, useState } from "react";
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeDesktopPage() {
  const [searchBarValue, setSearchBarValue] = useState("Islamabad");
  const [tempSearchValue, setTempSearchValue] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("Loading...");
  const [datal, setDatal] = useState([]);
  const [temperature, setTemperature] = useState("16°");
  const [localtime, setLocaltime] = useState("06:09 - Monday, 9 Sep `23");
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const key = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = (location) => {
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`)
      .then((res) => {
        const data = res.data;
        const newDatal = [
          { tempmax: "Temp", nineteen: `${data.current.temp_c}°`, temperatureImage: "images/temp_dg.svg" },
          { tempmax: "Humidity", nineteen: `${data.current.humidity}%`, temperatureImage: "images/humadity.svg" },
          { tempmax: "Wind", nineteen: `${data.current.wind_kph} km/h`, temperatureImage: "images/wind.svg" },
        ];
        setDatal(newDatal);
        setSearchBarValue(location);
        setTemperature(`${data.current.temp_c}°`);
        setLocaltime(data.location.localtime); 
        localStorage.setItem('lastSearchedLocation', location); 
        setWeatherCondition(data.current.condition.text);
        setShowPopup(false); 
      })
      .catch((err) => {
        console.log(err);
        setShowPopup(true); 
        setErrorMessage("The location you entered is not valid. Please try again.");
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData(tempSearchValue);
    }
  };

  useEffect(() => {
    const lastSearchedLocation = localStorage.getItem('lastSearchedLocation');
    if (lastSearchedLocation) {
      fetchWeatherData(lastSearchedLocation);
    } else {
      fetchWeatherData("Islamabad");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Weather Forecast Updates & Details</title>
        <meta
          name="description"
          content="Stay updated with the latest weather forecast. Get details on temperature, humidity, wind, and today's weather predictions with light drizzle and snow."
        />
      </Helmet>

      <div className="w-full h-full relative flex flex-col md:flex-row">
    
        <HomeDesktopBgweather searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue} temperature={temperature} localtime={localtime} />

      
        <div className={`${
          window.innerWidth <= 768 ? "absolute w-full p-0 mt-52 top-4" : window.innerWidth <= 1024 ? "md:fixed right-0 top-0 bottom-0" : "lg:fixed right-0 top-0 bottom-0"
        } flex flex-col bg-gray-900 bg-opacity-50 z-50 px-4 py-10`} style={{ width: window.innerWidth <= 768 ? '100%' : window.innerWidth <= 1024 ? '50%' : '40%', height: window.innerWidth <= 768 ? 'calc(100vh - 224px)' : '100%', overflow: 'hidden' }}>
  
          <div className="flex flex-col gap-5 py-5 px-4 text-white sm:py-1 max-h-full overflow-y-auto">

            <div className="flex flex-col items-start w-full">
              <Input
                name="Search Input"
                placeholder={'  Search Location...'}
                value={tempSearchValue}
                onChange={(e) => setTempSearchValue(e.target.value)}
                onKeyPress={handleKeyPress}
                suffix={
                  <div className="flex items-center h-[28px] w-[28px] justify-center">
                    {tempSearchValue?.length > 0 ? (
                      <CloseSVG onClick={() => setTempSearchValue("")} height={28} width={28} />
                    ) : (
                      <Img src="images/search.svg" alt="search" className="h-[28px] w-[28px] cursor-pointer" />
                    )}
                  </div>
                }
                className="flex h-[50px] items-center justify-start gap-[8px] border-b border-solid border-white bg-transparent bg-opacity-70 text-xl text-white-a700"
              />
            </div>
            <Text as="p" className="lg:text-[60px] md:text-[38px] mt-4 ">
              Weather Details...
            </Text>
            <div className="mt-8 sm:mt-0 flex flex-col items-start gap-[26px] self-stretch">
              <Text as="p" className="font-medium uppercase">
                {weatherCondition}
              </Text>
              <div className="flex flex-col gap-7">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {datal.map((d, index) => (
                    <HomeDesktopRowtempMaxOne {...d} key={"temperatureList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="mt-8 h-[50px] w-[90%] border-b border-solid border-white" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-300 p-8 rounded shadow-lg">
              <Text as="p" className="mb-4">
                {errorMessage}
              </Text>
              <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-red-500 text-white rounded">
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
