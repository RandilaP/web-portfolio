"use client";

import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import ProjectEntry from "./ProjectEntry"; // renamed component

const handleAnimationComplete = () => {
  console.log("Project page animation completed!");
};

const projectEntriesData = [
  {
    entryNumber: "01",
    title: "Volunteer Management System",
    award: "Full Stack App",
    description:
      "Built with Next.js and Supabase, this platform supports 200+ active volunteers, offering role management, progress tracking, and real-time updates.",
    imageSrc: "/projects/volunteer-system.png",
    demoLink: "https://www.sasnaka.randila.com",
    githubLink: "https://github.com/RandilaP/sasnaka-platform",
    trophyType: "participant",
    techStack: ["SiNextdotjs", "SiSupabase", "SiTailwindcss"],
  },
  {
    entryNumber: "02",
    title: "AI Resume Pipeline",
    award: "Automation Project",
    description:
      "A data pipeline that extracts and analyzes resume data with OpenAI API, sends structured results via SendGrid and uploads to S3. Fully serverless.",
    imageSrc: "/projects/job-pipeline.png",
    demoLink: "https://metana-job-pipeline.vercel.app/",
    githubLink: "https://github.com/RandilaP/metana-job-pipeline",
    trophyType: "participant",
    techStack: ["SiNextdotjs", "SiOpenai", "SiAmazonaws"],
  },
  {
    entryNumber: "03",
    title: "OpenMRS E2E Automation",
    award: "GSoC 2023",
    description:
      "Extended Playwright + Cucumber test coverage for OpenMRS 3.0 RefApp. Boosted QA automation reliability and test coverage significantly.",
    imageSrc: "/projects/openmrs-e2e.png",
    demoLink: "https://www.openmrs.org",
    githubLink: "https://github.com/openmrs/openmrs-esm-patient-chart",
    trophyType: "special",
    techStack: ["SiPlaywright", "SiTypescript"],
  },
  {
    entryNumber: "04",
    title: "Project Elixir",
    award: "Volunteer Crisis Response",
    description:
      "Worked on the Elixir platform for Sri Lanka's medical aid response during the crisis. Helped NGOs manage drug donations and requests.",
    imageSrc: "/projects/elixir.png",
    demoLink: "https://www.elixir.lk",
    githubLink: "https://github.com/LSFLK/MedicinesforLK",
    trophyType: "participant",
    techStack: ["SiReact", "SiTailwindcss"],
  },
  {
    entryNumber: "05",
    title: "BedHead Ticket Automation",
    award: "Healthcare OCR",
    description:
      "Digitizes handwritten hospital Bed Head Tickets using OCR, OpenCV, and NLP. Built with a modern Next.js frontend for hospitals.",
    imageSrc: "/projects/bht-mvp.png",
    demoLink: "https://bht-extraction.vercel.app/",
    githubLink: "https://github.com/RandilaP/bht-extraction",
    trophyType: "participant",
    techStack: ["SiPython", "SiOpencv", "SiNextdotjs"],
  },
  {
    entryNumber: "06",
    title: "Chrome Extension for Job Insights",
    award: "Browser Extension",
    description:
      "A Chrome extension that scrapes job listings and gives real-time ATS feedback using AI, built for jobseekers and resume matching.",
    imageSrc: "/projects/chrome-job.png",
    demoLink: "https://chromewebstore.google.com/detail/jobpromax-find-your-dream/bmjenpefcodngbhgmlegfiflgalgkmgm",
    trophyType: "participant",
    techStack: ["SiJavascript", "SiTailwindcss"],
  },
  {
    entryNumber: "07",
    title: "ScholarX Mentorship Platform",
    award: "Mentorship App",
    description:
      "Contributed frontend components for SEF’s mentorship app, enhancing accessibility and engagement for 1000+ students and mentors.",
    imageSrc: "/projects/scholarx.png",
    demoLink: "https://scholarx.sefglobal.org/",
    githubLink: "https://github.com/sef-global/scholarx-frontend",
    trophyType: "participant",
    techStack: ["SiReact", "SiBootstrap"],
  },
  {
    entryNumber: "08",
    title: "Gym Management System",
    award: "Full Stack Project",
    description:
      "Built under Trace2Trade, this platform handles gym memberships, payments, and admin workflows. Uses Supabase and React PDF export.",
    imageSrc: "/projects/gym.png",
    demoLink: "https://gym-project-uat.vercel.app/",
    trophyType: "participant",
    techStack: ["SiNextdotjs", "SiSupabase"],
  },
];

export default function Projects() {
  return (
    <>
      <main className="relative flex flex-col items-center flex-grow h-full pt-20">
        <div
          className="hidden md:block"
          style={{ width: "100%", height: "600px", position: "absolute", top: "0", zIndex: -1, opacity: 0.5 }}
        >
          <Threads amplitude={2.5} distance={0} enableMouseInteraction={false} />
        </div>

        <div className="flex items-center justify-center w-full p-4">
          <BlurText
            text="Projects"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl font-extrabold text-center md:text-7xl"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        <div className="flex flex-col w-full max-w-5xl p-4 mx-auto my-10 md:p-4 md:my-20">
          <div className="hidden md:block">
            <FallingText
              text={`Here are some of the projects I've built or contributed to — from full-stack web platforms to automation pipelines, AI tools, and open-source contributions.`}
              highlightWords={["projects", "built", "automation", "AI", "open-source"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          <div className="mb-10 md:hidden">
            <FallingText
              text={`Here are some of the projects I've built or contributed to — from full-stack web platforms to automation pipelines, AI tools, and open-source contributions.`}
              highlightWords={["projects", "built", "automation", "AI", "open-source"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          <div className="mt-20 md:mt-40">
            {projectEntriesData.map((entry, index) => (
              <ProjectEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                demoLink={entry.demoLink}
                githubLink={entry.githubLink}
                techStack={entry.techStack}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Randila Premarathne. All rights reserved.</p>
      </footer>
    </>
  );
}
