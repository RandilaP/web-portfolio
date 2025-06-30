'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Github, ExternalLink} from 'lucide-react'
import Link from 'next/link'
import { projects } from '../../data/Projects'
import { Project } from '../../components/ProjectSection'
import { 
  SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs,
  SiFastapi, SiOpenai, SiAmazon, SiSupabase, SiMongodb,
  SiFirebase, SiTailwindcss, SiStripe
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

// Map skill names to their corresponding React Icons - same as in ProjectCard
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  "Next.js": SiNextdotjs,
  FastAPI: SiFastapi,
  "OpenAI API": SiOpenai,
  "AWS Services": SiAmazon,
  Supabase: SiSupabase,
  "Tailwind CSS": SiTailwindcss,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "Stripe API": SiStripe,
  Recharts: FaJava,
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Custom cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // References for scroll animations
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Find the project based on URL param
  useEffect(() => {
    const id = Number(params.id);
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project not found, redirect to homepage
      router.push('/');
    }
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Mouse follower effect - only add on non-mobile
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [params, router, isMobile]);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#0c0c0c] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading project...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#0c0c0c] relative overflow-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Custom cursor - hidden on mobile */}
      {!isMobile && (
        <motion.div 
          ref={cursorRef}
          className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.1
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-white opacity-70"></div>
        </motion.div>
      )}
      
      {/* Glass Circles - Responsive sizes */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-tr from-blue-500/5 to-violet-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Header area with image and overlay */}
      <motion.div 
        ref={headerRef}
        className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <motion.img 
            src={project.images[0] || project.thumbnailImage} 
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
        </div>
        
        {/* Project title and back button */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <motion.button 
                className="flex items-center gap-1 text-white/90 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-sm hover:bg-black/50"
                whileHover={{ scale: 1.05, x: -2 }}
                onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
              >
                <ArrowLeft size={16} /> Back
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-6xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                  onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
                >
                  <Github size={16} />
                  View Code
                </motion.button>
              </Link>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-indigo-600/80 hover:bg-indigo-600 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                  onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Content area */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto -mt-16 sm:-mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Content card with glass effect */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 md:p-10">
          {/* Skills list */}
          <div className="mb-8">
            <h3 className="text-lg text-white/90 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, index) => {
                const Icon = skillIconMap[skill];
                
                return (
                  <motion.div 
                    key={`${skill}-${index}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                    onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
                  >
                    {Icon && <Icon className="text-lg" />}
                    <span className="text-sm text-white/80">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Project description */}
          <div className="mb-10">
            <h3 className="text-lg text-white/90 mb-4">Project Overview</h3>
            <p className="text-white/70 leading-relaxed">
              {project.description}
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ipsum euismod, 
              facilisis purus ac, ultricies nisi. Nullam eget semper mi. Vivamus ac nulla vitae massa 
              vulputate aliquet. Donec sagittis nisi in est molestie, a malesuada velit fermentum.
            </p>
            <p className="text-white/70 leading-relaxed mt-4">
              Nullam eget semper mi. Vivamus ac nulla vitae massa vulputate aliquet. Donec sagittis 
              nisi in est molestie, a malesuada velit fermentum. Fusce vel maximus odio, eget 
              elementum nibh.
            </p>
          </div>
          
          {/* Project images */}
          <div className="mb-10">
            <h3 className="text-lg text-white/90 mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <motion.div 
                  key={`image-${index}`}
                  className="rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => cursorRef.current?.classList.add("scale-[3]")}
                  onMouseLeave={() => cursorRef.current?.classList.remove("scale-[3]")}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="flex items-center gap-2 w-full sm:w-auto px-6 py-3 text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
              >
                <Github size={18} />
                View Source Code
              </motion.button>
            </Link>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <motion.button 
                className="flex items-center gap-2 w-full sm:w-auto px-6 py-3 text-white bg-indigo-600/80 hover:bg-indigo-600 rounded-full border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
                onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
              >
                <ExternalLink size={18} />
                Visit Live Demo
              </motion.button>
            </Link>
          </div>
        </div>
        
        {/* More projects suggestion */}
        <motion.div 
          className="mt-16 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg md:text-xl font-medium text-white/90 mb-4">
            Explore More Projects
          </h3>
          <Link href="/" className="inline-block">
            <motion.button 
              className="flex items-center gap-2 px-6 py-3 text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => cursorRef.current?.classList.add("scale-150")}
              onMouseLeave={() => cursorRef.current?.classList.remove("scale-150")}
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}