import React, { useEffect } from 'react';
import { teamMembers } from '../constants';
// import Stars from './Stars';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[7rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* <div className="absolute inset-0">
        <Stars />
      </div> */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8">お問い合わせ</h2>
        <p className="text-center mb-8">お問い合わせは以下のフォーム、もしくはinfo@neurogica.comまで</p>
        <div className="w-full">
          <iframe 
            title="お問い合わせフォーム" 
            src="https://forms.gle/ErvwbLgxXwsJfU5bA" 
            width="100%" 
            height="800" 
            frameBorder="0"
            className="border-none"
          >読み込み中…</iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
