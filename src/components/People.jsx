import React from 'react';
import { teamMembers } from '../constants';
import { member } from '../assets';

const People = () => {
  return (
    <div className="min-h-screen text-white py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">チームメンバー</h2>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {teamMembers.map((member, index) => {
            return (
              <div
                className={`md:flex even:md:translate-y-[2rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
                key={index}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden p-12">
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-4">
                      <div className="tagline text-xl font-semibold">{member.title}</div>
                    </div>
                    <h4 className="h4 mb-2">{member.name}</h4>
                    <p className="body-2 text-n-4">{member.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <img 
            src={member}
            alt="All Members" 
            className="rounded-lg shadow-lg max-w-[60rem] mx-auto w-full"
          />
          <p className="text-gray-400 mt-2">左から西村、長嶋(CTO)、ゼファー(CEO)、平野</p>
        </div>
      </div>
    </div>
  );
};

export default People;
