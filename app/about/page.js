"use client";

import Image from "next/image";
import profilePic from "/public/Debasish Seal.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center">
        About Me
      </motion.h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0">
          <Image
            src={profilePic}
            alt="Debasish Seal"
            width={340}
            height={340}
            priority
            className="rounded-2xl shadow-lg object-cover" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-300">
          <p className="mb-4">
            👋 Hi, I&apos;m <strong>Debasish Seal</strong>, a passionate{" "}
            <span className="text-cyan-400">Full-Stack Developer</span> based in India.
            I love and enjoy building modern, scalable, and user-focused web and mobile
            applications using contemporary technologies.
          </p>
          <p className="mb-4">
            💻 My core skill set includes{" "}
            <strong className="text-yellow-300">
              React, Next.js, Node.js, Express.js, MongoDB
            </strong>, along with strong fundamentals in{" "}
            <strong className="text-yellow-300">
              HTML, CSS, JavaScript, TypeScript, REST APIs, Git, and GitHub
            </strong>.
          </p>
          <p className="mb-4">
            📱 I also work with{" "}
            <strong className="text-yellow-300">
              React Native and Expo
            </strong>{" "}
            for building mobile applications, and have hands-on experience with{" "}
            <span className="text-yellow-300">
              encryption and secure data handling
            </span>{" "}
            in backend systems.
          </p>
          <p className="mb-4">
            🚀 I focus on writing clean, maintainable code and building responsive,
            accessible, and performance-oriented applications that deliver real value
            to users.
          </p>
          <p className="mb-4">
            🛠️ I have experience deploying applications using platforms like{" "}
            <span className="text-yellow-300">
              GitHub Pages, Render, and Vercel
            </span>, and I actively explore modern development workflows and tools.
          </p>
          <p className="mb-4">
            🔐 I&apos;m particularly interested in{" "} <span className="text-yellow-300">backend architecture, application
            security</span>, and understanding how systems work end-to-end.
          </p>
          <p className="mb-4">
            ⚡ Outside of development, I enjoy learning about cybersecurity, exploring
            new technologies, and spending time with a good cup of chai ☕.
          </p>
          <p className="pt-4">
            <strong className="text-cyan-400">Career Objective:</strong> To grow as a
            software engineer by working on challenging problems, continuously
            improving my skills, and contributing to impactful projects with motivated
            and collaborative teams.
          </p>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">🎓 Education</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 text-gray-300 text-left">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-6 py-3 border border-gray-700">Degree</th>
                <th className="px-6 py-3 border border-gray-700">Institution</th>
                <th className="px-6 py-3 border border-gray-700">Year</th>
                <th className="px-6 py-3 border border-gray-700">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 border border-gray-700">Advance Diploma in Web Development</td>
                <td className="px-6 py-3 border border-gray-700">DIGIFY EDUCATIONAL & TECHNOLOGIES FOUNDATION</td>
                <td className="px-6 py-3 border border-gray-700">2023 - 2024</td>
                <td className="px-6 py-3 border border-gray-700">84.2%</td>
              </tr>
              <tr>
                <td className="px-6 py-3 border border-gray-700">Diploma in Mechanical Engineering</td>
                <td className="px-6 py-3 border border-gray-700">JIS SCHOOL OF POLYTECHNIC
                  ( WBSCTE )</td>
                <td className="px-6 py-3 border border-gray-700">2016 - 2020</td>
                <td className="px-6 py-3 border border-gray-700">8.9 CGPA</td>
              </tr>
              <tr>
                <td className="px-6 py-3 border border-gray-700">Secondary</td>
                <td className="px-6 py-3 border border-gray-700">HOOGHLY BRANCH
                  (GOVT.) SCHOOL
                  ( WBBSE )</td>
                <td className="px-6 py-3 border border-gray-700">2016</td>
                <td className="px-6 py-3 border border-gray-700">68%</td>
              </tr>
              <tr>
                <td className="px-6 py-3 border border-gray-700">AMIN SURVEY</td>
                <td className="px-6 py-3 border border-gray-700">WBSCTE</td>
                <td className="px-6 py-3 border border-gray-700">2017</td>
                <td className="px-6 py-3 border border-gray-700">A+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Resume Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-center">
        <Link
          href="/Debasish_Resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer">
          📄 Download Resume
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
