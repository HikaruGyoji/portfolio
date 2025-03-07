import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import { Project, WorkCategory } from "../types/works";
import WorksTab from "./WorksTab";

const Works = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects: Project[] = t.works.projects;

  const [activeCategory, setActiveCategory] = useState<WorkCategory>("web");
  const [visibleCount, setVisibleCount] = useState(3); // 最初に表示するプロジェクト数

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  // activeCategory が変更されたときに visibleCount をリセット
  useEffect(() => {
    setVisibleCount(3);
  }, [activeCategory]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // 3つずつ追加表示
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(3, prevCount - 3)); // 最小値は3
  };

  return (
    <section id="works" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text max-w-fit">
          {t.works.title}
        </h2>

        <WorksTab
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <a
              key={index}
              href={project.demo || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 hover:bg-zinc-800 transition-colors rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-zinc-700 text-teal-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 「続きを見る」ボタン */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              {t.works.showMore}
            </button>
          </div>
        )}
        {/* 「表示を減らす」ボタン */}
        {visibleCount > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              {t.works.showLess}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Works;
