import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import TypedText from '@/components/TypedText';
import { Fade } from 'react-awesome-reveal';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiNextdotjs, SiGit, SiPostman } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 size={30} /> },
  { name: "CSS", icon: <FaCss3Alt size={30} /> },
  { name: "JavaScript", icon: <FaJs size={30} /> },
  { name: "React", icon: <FaReact size={30} /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
  { name: "Node.js", icon: <FaNodeJs size={30} /> },
  { name: "Express.js", icon: <SiExpress size={30} /> },
  { name: "MongoDB", icon: <SiMongodb size={30} /> },
  { name: "Git", icon: <SiGit size={30} /> },
  { name: "GitHub", icon: <FaGithub size={30} /> },
  { name: "REST API", icon: <SiPostman size={30} /> },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 lg:px-20 py-20">
      {/* Intro Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <Fade direction="left" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Hi, I&apos;m <span className="text-blue-500">Debasish</span>
            </h1>
            <TypedText />
            <Link href="/projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition cursor-pointer">
              View My Projects
            </Link>
          </Fade>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Fade direction="right" triggerOnce>
            <Image
              src="/developer.jpg"
              alt="Developer at work"
              width={800}
              height={0}
              className="w-full h-auto rounded-xl shadow-xl"
              priority />
          </Fade>
        </div>
      </div>

      {/* Skills Section */}
      <div className="my-20 text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 bg-white/5 p-8 rounded-xl backdrop-blur-md">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
                {skill.icon}
                <p className="mt-2 text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      {/* Call to Action */}
      <Fade triggerOnce>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to work together?</h2>
          <p className="mb-6 text-lg">I&apos;m open to freelance, internship, and full-time opportunities.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium cursor-pointer">Contact Me</Link>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
