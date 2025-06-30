'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
// Removed unused import
// import { comma } from 'postcss/lib/list';


export const experiences = [
  {
    id: 1,
    title: "Junior Backend Software Engineer",
    company: "The Jobhelpers",
    year: "2024 – Present",
    description:
      "Built and deployed scalable job scraping systems, optimized email infrastructure, and developed Chrome extensions integrated with ATS feedback. Helped grow the job database from 20K+ to over 1M listings.",
    logo: "/exp_logos/jobhelpers-logo.png",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "The Jobhelpers",
    year: "2024",
    description:
      "Worked on internal dashboards and resume scoring tools using React, Tailwind, Node.js, and OpenAI API. Enhanced resume-to-job alignment with smart AI-powered integrations.",
    logo: "/exp_logos/jobhelpers-logo.png",
  },
  {
    id: 3,
    title: "Tech Lead - Volunteer",
    company: "Sasnaka Sansada",
    year: "2024 – Present (On Hold)",
    description:
      "Led a team of 10+ developers to build a volunteer management system using Next.js and Supabase. Streamlined project and member coordination for 200+ volunteers across Sri Lanka.",
    logo: "/exp_logos/sasnaka.png",
  },
  {
    id: 4,
    title: "Google Summer of Code Developer",
    company: "OpenMRS / Google",
    year: "2023",
    description:
      "Extended E2E test coverage for the OpenMRS 3.0 Reference Application using Playwright and Cucumber. Improved QA reliability by 60% and supported healthcare platforms in 40+ countries.",
    logo: "/exp_logos/gsoc-logo.png",
  },
  {
    id: 5,
    title: "Developer & Contributor",
    company: "OpenMRS",
    year: "2022 – Present",
    description:
      "Contributed to QA automation and REST API improvements for mission-critical health systems. Active member of the OpenMRS QA and dev community.",
    logo: "/exp_logos/openmrs-logo.png",
  },
  {
    id: 6,
    title: "Frontend Contributor",
    company: "Sustainable Education Foundation",
    year: "2022 – 2023",
    description:
      "Helped improve SEF’s mentorship platform using React and Tailwind, enhancing student access to learning and guidance.",
    logo: "/exp_logos/sef-logo.png",
  },
  {
    id: 7,
    title: "Frontend Developer (Volunteer)",
    company: "Lanka Software Foundation",
    year: "2022 – 2023",
    description:
      "Developed UI components for the Elixir platform during Sri Lanka's economic crisis to help distribute life-saving medicine.",
    logo: "/exp_logos/lsf-logo.png",
  }
];


const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl px-4 py-16 mx-auto mt-10 sm:px-6 lg:px-8">
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid items-start grid-cols-1 p-6 bg-black shadow-lg md:grid-cols-2 gap-x-20 rounded-2xl md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="text-xl font-bold text-gray-100 md:text-2xl">{exp.title}</h3>

              <p className="mb-1 text-lg text-cyan-400">{exp.company}</p>
              {/* Year */}
              <span
                className="mb-2 text-gray-400 md:text-xl text-md font-regular"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="relative flex items-center justify-center w-10 h-10 my-5 md:my-0"> {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'fill', borderRadius: '50%' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;