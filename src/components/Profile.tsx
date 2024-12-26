import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

const Profile = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const timeline: TimelineEvent[] = t.profile.timelineEvent;

  // 資格データ
  const certifications: Certification[] = t.profile.certifications;

  // 状態管理
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  // ソートされた資格リスト
  const sortedCertifications = certifications.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  // 表示する資格リスト
  const visibleCertifications = showAllCertifications
    ? sortedCertifications
    : sortedCertifications.slice(0, 3);

  return (
    <section id="profile" className="py-20 bg-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text">
          {t.profile.title}
        </h2>

        {/* コンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左側: About Me, Skills, Certifications */}
          <div className="space-y-8">
            {/* About Me */}
            <div>
              <h3 className="text-3xl font-semibold text-zinc-100 mb-4">
                {t.profile.aboutMe}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {t.profile.aboutText}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-3xl font-semibold text-zinc-100 mb-4">
                {t.profile.skills}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Vue",
                  "Node.js",
                  "Python",
                  "AWS",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-zinc-700 text-teal-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-semibold text-zinc-100 mb-4">
                {t.profile.certification}
              </h3>
              <div className="space-y-3">
                {visibleCertifications.map((cert) => (
                  <div
                    key={`${cert.name}-${cert.year}`}
                    className="bg-zinc-700/50 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium text-zinc-100">
                          {cert.name}
                        </h5>
                        <p className="text-sm text-zinc-400">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-teal-400">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Show More / Show Less Button */}
              {certifications.length > 3 && (
                <button
                  onClick={() => setShowAllCertifications((prev) => !prev)}
                  className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  {showAllCertifications
                    ? t.profile.showLess
                    : t.profile.showMore}
                </button>
              )}
            </div>
          </div>

          {/* 右側: Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-zinc-100 mb-4">
              {t.profile.timeline}
            </h3>
            <div className="space-y-8">
              {timeline.map((event) => (
                <div
                  key={event.title}
                  className="relative pl-8 pb-8 border-l-2 border-teal-400 last:pb-0"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-teal-400 rounded-full" />
                  <div className="text-teal-400 font-semibold mb-1">
                    {event.year}
                  </div>
                  <h4 className="text-zinc-100 font-medium mb-2">
                    {event.title}
                  </h4>
                  <p className="text-zinc-400">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
