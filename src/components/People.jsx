import React, { useEffect } from 'react';
import { teamMembers } from '../constants';
import { member } from '../assets';

const People = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[5rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 pt-8">チームメンバー</h2>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-[90rem] mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
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
                        {member.title}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-white">{member.name}</h4>
                    <p className="text-gray-300">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 max-w-4xl mx-auto">
            <img 
              src={member}
              alt="All Members" 
              className="rounded-2xl w-full"
            />
          </div>
          <p className="text-gray-400 mt-4">左から西村、長嶋(CTO)、ゼファー(CEO)、平野</p>
        </div>
      </div>
    </div>
  );
};

export default People;
