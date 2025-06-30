import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectEntryProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  imageSrc?: string;
  demoLink?: string;
  githubLink?: string;
  techStack?: string[];
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({
  entryNumber,
  title,
  award,
  description,
  imageSrc,
  demoLink,
  githubLink,
  techStack = [],
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-6 md:py-10 last:border-b-0">
      <div className="flex-shrink-0 w-full mb-4 mr-0 text-4xl font-extrabold text-center sm:text-5xl md:text-6xl md:mr-8 md:mb-0 md:w-auto md:text-left">
        {entryNumber}
      </div>

      <div className="flex flex-col flex-1 md:flex-row">
        <div className="flex items-center justify-center flex-shrink-0 w-full mb-6 overflow-hidden rounded-lg md:w-1/3 aspect-video md:mb-0 md:mr-8">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Project thumbnail for ${title}`}
              className="object-contain w-full h-full rounded-sm"
              width={500}
              height={300}
            />
          ) : (
            <span className="text-sm text-gray-500 sm:text-base">Project Image</span>
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl md:mb-4">{title}</h3>
          <p className="mb-2 text-sm italic text-white/60">{award}</p>

          {/* Tech Stack Icons */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {techStack.map((iconName, index) => {
                const IconComponent = (Icons as any)[iconName];
                return IconComponent ? (
                  <IconComponent
                    key={index}
                    className="text-xl transition-colors text-white/80 hover:text-white"
                  />
                ) : null;
              })}
            </div>
          )}

          <p className="mb-4 text-sm leading-relaxed sm:text-base text-white/70">{description}</p>

          <div className="flex gap-4 mt-2">
            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded-lg bg-cyan-600 hover:bg-cyan-700"
              >
                <FaExternalLinkAlt /> Live Demo
              </Link>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <FaGithub /> GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
