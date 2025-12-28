"use client"
import { ProjectCard } from "./components/ProjectCard";
import { useLanguage } from "@/app/providers/LanguageContext";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProjectsData } from "./data/projectsData";

const translation = {
  en: {
    projects: "Projects",
    showMore: "Show more projects",
    showLess: "Show less"
  },
  am: {
    projects: "ፕሮጀክቶች",
    showMore: "ተጨማሪ ፕሮጀክቶችን አሳይ",
    showLess: "ያነሱ አሳይ"
  }
}

export function Projects() {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projectsData = ProjectsData;


  const displayedProjects = showAll
    ? projectsData.map(project => (
      <ProjectCard
        key={project.id}
        index={project.index}
        src={project.src}
        stack={project.stack}
        post={project.post}
        repository={project.repository}
        title={project.title}
        descriptionBr={project.descriptionBr}
        descriptionEn={project.descriptionEn}
        isVideo={(project as any).isVideo || false}
      />
    ))
    : projectsData.slice(0, 6).map(project => (
      <ProjectCard
        key={project.id}
        index={project.index}
        src={project.src}
        stack={project.stack}
        post={project.post}
        repository={project.repository}
        title={project.title}
        descriptionBr={project.descriptionBr}
        descriptionEn={project.descriptionEn}
        isVideo={(project as any).isVideo || false}
      />
    ));

  return (
    <section id="projects" className="bg-[#0a0f0a] min-h-screen pt-14">
      <div className="px-4 md:px-0 max-w-screen-xl lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 mx-auto min-h-fit" >


        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#e4f5e4] relative inline-block">
            {translation[language].projects}
            <span className="block w-24 h-1 bg-[#22c55e] mt-2 mx-auto rounded-full"></span>
          </h2>
        </div>


        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {displayedProjects}
        </div>
        {projectsData.length > 6 && (
          <div key={projectsData.length} className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#1a2a1a] hover:bg-[#2d3a2d] border border-[#2d3a2d] text-[#e4f5e4] rounded-md transition-all duration-300 flex items-center gap-2 font-medium"
            >
              {showAll ? translation[language].showLess : translation[language].showMore}
              {showAll ? (
                <ChevronUp size={20} className="text-current" />
              ) : (
                <ChevronDown size={20} className="text-current" />
              )}

            </button>
          </div>
        )}
      </div>
    </section>
  );
}
