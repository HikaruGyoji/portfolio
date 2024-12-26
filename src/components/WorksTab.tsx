import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import { WorkCategory } from "../types/works";

interface WorksTabProps {
  activeCategory: WorkCategory;
  setActiveCategory: (category: WorkCategory) => void;
}

const WorksTab: React.FC<WorksTabProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  const categories: { key: WorkCategory; label: string }[] = [
    { key: "web", label: t.works.categories.web },
    { key: "app", label: t.works.categories.app },
    { key: "illustration", label: t.works.categories.illustration },
    { key: "design", label: t.works.categories.design },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg bg-zinc-800 p-1">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === key
                ? "bg-teal-500 text-white"
                : "text-zinc-400 hover:text-teal-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorksTab;
