import { Link } from 'react-router-dom';
import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import Button from "./Button";

const Services = () => (
  <Section className="overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 pt-10" id="services">
    <div className="container md:pb-10 text-white">
      <Heading tag="" title="事業一覧" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-[90rem] mx-auto">
        {roadmap.map((item, index) => (
          <div
            key={item.id}
            className={`md:flex ${
              index % 2 === 1 ? 'lg:translate-y-16' : ''
            } group`}
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg w-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
              <div className="relative p-8 bg-gray-900/90 rounded-[2.4375rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient"></div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {item.date}
                    </div>
                  </div>
                  <div className="mb-6">
                    <img
                      className="w-full rounded-xl object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-12 md:mt-15 xl:mt-20">
        <Button className="w-48" as={Link} to="/people">メンバー</Button>
        <Button className="w-48" as={Link} to="/contacts">お問い合わせ</Button>
      </div>
    </div>
  </Section>
);

export default Services;
