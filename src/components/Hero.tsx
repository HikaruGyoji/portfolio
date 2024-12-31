import React from "react";
import { Mail, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `url('/portfolio/static/background.gif') no-repeat center center/cover`,
      }}
    >
      {/* 背景のグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20"></div>

      {/* カードで囲まれた全体コンテンツ */}
      <div className="mt-16 relative z-10 bg-zinc-800/70 text-zinc-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        {/* タイトルと名前 */}
        <div className="mb-4 text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text max-w-fit">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t.hero.name}</h2>
          <p className="text-lg md:text-xl mb-4">{t.hero.summary}</p>
          <p className="text-lg md:text-xl mb-4">{t.hero.summary2}</p>
          <p className="text-lg md:text-xl mb-4">{t.hero.summary3}</p>
        </div>

        {/* アイコンリンク */}
        <div className="flex space-x-6 mb-8">
          <a
            href="mailto:hikarugyoji@gmail.com"
            className="hover:text-teal-400 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://x.com/hikarugyoji"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com/hikarugyoji?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
