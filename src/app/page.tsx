// app/page.tsx (or wherever your page file is)

"use client";

import React from "react"; // Removed useState
import Image from "next/image"; // Keep Image for CircularText section

// Import your components and blocks
// Removed GooeyNav import
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
// ScrollReveal is imported but not used in the provided code snippet, keep if used elsewhere
// import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillTag from "@/components/SkillTag"; // Assuming SkillTag is in components folder
import Contact from "@/components/ContactUs";

// data/projects.ts
// Define your projects array (add your actual project data here)

// Removed items constant

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};


const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "Figma",
];

const backendSkills = [
  "Node.js",
  "Express",
  "Supabase",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Authentication",
];

const aiSkills = [
  "Python",
  "TensorFlow",
  "Keras",
  "NLP",
  "OCR",
  "scikit-learn",
  "Model Integration",
];

const toolsSkills = [
  "Git",
  "Docker",
  "Postman",
  "Vercel",
  "AWS EC2",
  "AWS S3",
  "CI/CD",
  "Bash",
];

export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <>
      {" "}
      {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="relative flex flex-col items-center flex-grow h-full pt-20">
        {" "}
        {/* Added padding top to account for fixed header */}
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            bottom: "50",
          }}
          className="hidden md:block"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            bottom: "50",
          }}
          className="md:hidden opacity-10"
        >
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>
        {/* ... other main content elements ... */}
        <div className="relative flex items-center justify-center w-full px-4 my-4 font-bold text-center md:mt-15 md:px-0">
          <BlurText
            text="Randila Premarathne"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl text-center lg:text-9xl md:text-7xl"
          />
        </div>
        <div className="mt-1 font-bold text-center opacity-0 animate-fadeIn md:mt-3">
          <TrueFocus
            sentence="Fullstack QA Automation MachineLearning"
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
          />
        </div>
        {/* style jsx block is fine */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>
        <div className="w-full items-center mt-8 mb-4 relative h-[300px] hidden md:block">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <Image
            src="/logo/logo.png"
            alt="Lauv Logo"
            width={20}
            height={20}
            className="absolute m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 left-44 bottom-9"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow mt-1 space-x-0 w-ful md:flex-row md:w-9xl md:mt-35 md:space-x-50">
          {/* Tech Stack Section Start */}
          <div className="flex flex-col w-full max-w-lg px-4 mt-10 mb-20 space-y-8 md:px-0">
            {/* FRONTEND */}
            <div className="relative p-6 transition-transform duration-300 ease-in-out rounded-lg hover:scale-105 custom-corner-border">
              <h3 className="mb-3 text-lg font-bold tracking-wide text-white md:text-2xl">
                FRONTEND
              </h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-gray-400 md:text-md">
                I create responsive, accessible, and interactive user interfaces
                with modern frontend frameworks and design systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="relative p-6 transition-transform duration-300 ease-in-out rounded-lg hover:scale-105 custom-corner-border">
              <h3 className="mb-3 text-lg font-bold tracking-wide text-white md:text-2xl">
                BACKEND
              </h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-gray-400 md:text-md">
                I build scalable, secure, and testable backend systems using
                Node.js, databases, and cloud-native services.
              </p>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* AI / ML */}
            <div className="relative p-6 transition-transform duration-300 ease-in-out rounded-lg hover:scale-105 custom-corner-border">
              <h3 className="mb-3 text-lg font-bold tracking-wide text-white md:text-2xl">
                AI / MACHINE LEARNING
              </h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-gray-400 md:text-md">
                I work with ML frameworks and AI APIs to solve problems with
                OCR, natural language, and automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* TOOLS & DEVOPS */}
            <div className="relative p-6 transition-transform duration-300 ease-in-out rounded-lg hover:scale-105 custom-corner-border">
              <h3 className="mb-3 text-lg font-bold tracking-wide text-white md:text-2xl">
                TOOLS & DEVOPS
              </h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-gray-400 md:text-md">
                My workflow includes containerization, deployment, and tooling
                that improves team collaboration and automation.
              </p>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill) => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Section End */}

          {/* What I do Section */}
          <div className="flex flex-col">
            <BlurText
              text="What I do"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl font-extrabold md:text-7xl"
            />

            <div className="hidden mt-10 mb-20 md:block">
              <TiltedCard
                imageSrc="/photos/randila.png"
                altText="Randila Premarathne"
                captionText="Randila Premarathne"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="absolute px-4 py-2 m-5 font-bold bg-transparent border-dashed rounded-lg opacity-50 border-1 top-5 left-85">
                    RandilaP
                  </p>
                }
              />
            </div>

            <div className="mt-10 mb-20 md:hidden">
              <TiltedCard
                imageSrc="/photos/randila.png"
                altText="Randila Premarathne"
                captionText="RandilaP"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="absolute px-4 py-2 m-5 font-bold bg-transparent border-dashed rounded-lg opacity-50 border-1">
                    RandilaP
                  </p>
                }
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="flex items-center justify-center w-full p-4 mt-5 md:mt-25">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl font-extrabold md:text-7xl"
          />
        </div>
        <ExperienceTimeline />
        {/* Projects Section */}
        
        <Contact />
        {/* Circular Text Section */}
      </main>
      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-2">
        {" "}
        {/* Added margin top */}
        <p>
          &copy; {new Date().getFullYear()} Randila Premarathne. All rights
          reserved.
        </p>{" "}
        {/* Updated name */}
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}
