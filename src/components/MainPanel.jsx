import { curve, neurogicaVideo, neurogica_logo_white, neurogica_logo_transparent } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons, newsItems } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const MainPanel = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative pt-[21rem] pb-[20rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            style={{ transform: 'scale(1.2)' }}
            src={neurogicaVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black opacity-60 z-1"></div>
        </div>
      </div>
      <div className="container relative z-1" ref={parallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[3.5rem] sm:mb-[4rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 flex justify-center items-center flex-wrap">
            <img className="mb-3 xs:w-[20%]" src={neurogica_logo_transparent} width={100} height={80} alt="Neurogica Transparent" />
            <img className="mt-[-1rem] xs:w-[60%]" src={neurogica_logo_white} width={350} height={100} alt="Neurogica White" />
          </h1>
          <p className="body-1 font-bold ml-10 mt-[-2.5rem] xs:pt-[0.5rem] xs:ml-14 lg:ml-10 md:ml-0 sm:ml-[-1.8rem]">
            ニューロで、ロジカルに。
          </p>
        </div>
      </div>
      <div className="relative w-full mx-auto xl:mb-20 z-10">
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute left-1/2 transform -translate-x-1/2 
            bottom-[-10rem] 
            sm:bottom-[-8rem] 
            md:bottom-[-10rem] 
            lg:bottom-[-16rem] 
            xl:bottom-[-18rem]
            w-[85%] 
            md:w-[80%] 
            lg:w-[75%] 
            min-w-[320px]
            max-w-[1400px]
            mx-auto px-6 py-6">
            <div className="relative p-1 rounded-[1.5rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg w-full">
              <div className="relative p-6 bg-gray-900/90 rounded-[1.4375rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient"></div>
                <div className="relative z-1">
                  <h2 className="text-xl font-bold mb-4 text-white">最新のニュース</h2>
                  <div className="overflow-x-auto overflow-y-scroll max-h-[10rem] md:max-h-[12rem] lg:max-h-[16rem]">
                    <ul className="list-disc list-inside min-w-fit pr-4 text-gray-300">
                      {newsItems.map((item, index) => (
                        <li className="mb-2 whitespace-nowrap" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollParallax>
      </div>
    </Section>
  );
};

export default MainPanel;
