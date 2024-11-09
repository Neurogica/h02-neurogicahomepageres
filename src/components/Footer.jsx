import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div>
          <a href="/commerce" className="text-n-4 hover:text-n-1 transition-colors">
            特定商取引法に基づく表記
          </a>
        </div>

        <p className="caption text-n-4">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => {
            const isEmail = item.id === "email"; // アイコンがメールの場合の条件
            return (
              <a
                key={item.id}
                href={isEmail ? `mailto:info@neurogica.com` : item.url}
                target={isEmail ? "" : "_blank"} // メールの場合は新しいタブを開かない
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
