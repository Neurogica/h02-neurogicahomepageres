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
      className="relative pt-[20rem] pb-[20rem] -mt-[5.25rem] overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={neurogicaVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
      <div className="container relative z-10" ref={parallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 flex justify-center items-center flex-wrap">
            <img className="mb-3 xs:w-[20%]" src={neurogica_logo_transparent} width={100} height={80} alt="Neurogica Transparent" />
            <img className="mt-[-1rem] xs:w-[60%]" src={neurogica_logo_white} width={350} height={100} alt="Neurogica White" />
          </h1>
          <p className="body-1 font-bold ml-10 mt-[-2.5rem] xs:pt-[0.5rem] xs:ml-14 lg:ml-10 md:ml-0 sm:ml-[-1.8rem]">
            ニューロで、ロジカルに。
          </p>
        </div>
      </div>
      <div className="relative max-w-[25rem] md:right-[8rem] mx-auto md:max-w-7xl  xl:mb-30 z-3">
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute sm:left-1/2 md:left-1/2 left-1/2 transform -translate-x-1/2 bottom-[-10rem] md:bottom-[-12rem] lg:bottom-[-15rem] px-4 py-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex flex-col space-y-4 overflow-y-scroll max-h-[8rem] md:max-h-[8rem] lg:max-h-[10rem] w-[90%] xs:w-[90%] sm:w-[120%] md:w-[50%] lg:w-[120%] xl:w-[120%]">
            <h2 className="text-xl font-bold mb-0">最新のニュース</h2>
            <ul className="list-disc list-inside">
              {newsItems.map((item, index) => (
                <li className="mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollParallax>
      </div>
    </Section>
  );
};

export default MainPanel;
