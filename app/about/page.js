"use client";

import Image from "next/image";
import profilePic from "/public/Debasish Seal.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-white">
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
          transition={{ duration: 0.6 }}>
          <Image
            src={profilePic}
            alt="Debasish Seal"
            className="rounded-2xl shadow-lg object-cover" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-300">
          <p className="mb-4">
            👋 Hi, I’m <strong>Debasish Seal</strong>, a passionate{" "}
            <span className="text-cyan-400">Full-Stack Web Developer</span> based in India.
            I love building modern web applications using technologies like{" "}
            <span className="text-yellow-300">React, Next.js, Node.js, MongoDB</span> and more.
          </p>
          <p className="mb-4">🎓 I’m currently learning <strong className="text-yellow-300">Next.js</strong>, diving deeper into backend systems, and exploring cloud deployment.</p>
          <p className="mb-4">
            🚀 With a strong focus on creating user-friendly, responsive, and accessible web apps,
            I&apos;m always eager to learn, build, and contribute to amazing projects.
          </p>
          <p>
            🛠️ Other than that I also create and learn websites with{" "}
            <span className="text-yellow-300">
              HTML, CSS, JavaScript, Express.js, REST API (Postman), Git and GitHub
            </span>
          </p>
          <p>
            🎯 Also I&apos;ve used{" "}
            <span className="text-yellow-300">
              GitHub pages, Render and Vercel
            </span>{" "}
            for hosting and interested to learn and explore more platforms.
          </p>
          <p>🎯 In my free time, I enjoy exploring new tools.</p>
          <p className="pb-4">⚡ When I’m not coding, I enjoy reading, learning about cybersecurity, or having a good cup of chai ☕!</p>
          <p className="mb-4 pt-4"><strong className="text-cyan-400">Goals / Objective:</strong> To pursue a creative and challenging career engineering field where I can acquire new skills and knowledge and can work with an active and motivated team of professionals to create a significant outcome towards industry, society as well as environment.</p>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16">
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
        <a
          href="/Debasish_Resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          📄 Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default About;
