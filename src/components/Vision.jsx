import { brainwaveSymbol, check, neurogica_logo, neurogica_logo_transparent } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Vision = () => {
  return (
    <Section crosses id="vision" className="bg-gradient-to-b from-gray-900 to-gray-800 pb-10">
      <div className="container lg:flex text-white">
        <div className="max-w-[60rem]">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 md:mb-10">
            ビジョン：<br/>「脳科学が当たり前になる社会を創る。」
          </h2>

          <ul className="max-w-[30rem] mb-12 md:mb-16 mt-12">
            <li className="mb-4 py-4">
              <div className="flex items-center">
                <img src={check} width={32} height={32} alt="check" />
                <h6 className="text-xl md:text-2xl ml-6">
                  現在非科学的な実社会の中で、脳科学を活用した新しい価値提供を行います。
                </h6>
              </div>
              <div className="flex items-center mt-6">
                <img src={check} width={32} height={32} alt="check" />
                <h6 className="text-xl md:text-2xl ml-6">
                  Neuroビッグデータを用いたAI解析による価値提供を続け、新しい社会の構築を目指します。
                </h6>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-6">
          <p className="text-lg md:text-xl mb-10 text-gray-300 md:mb-16 lg:mb-32 lg:w-[26rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 xs:w-[20rem]">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={neurogica_logo_transparent}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Vision;
