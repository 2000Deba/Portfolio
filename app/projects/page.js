"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio built with Next.js and Tailwind CSS.",
        link: "#",
        image: "/portfolio.jpg",
        // image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1031&auto=format&fit=crop",
    },
    {
        title: "PassOp - Password Manager",
        description: "Pass Op is a password manager which saves password in the localStorage.",
        link: "https://2000deba.github.io/PassOp/",
        image: "/passop.jpg",
        // image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800",
    },
    {
        title: "Todo App (React)",
        description: "This is a Todo list making task performer app. Which saves all the tasks to the localStorage.",
        link: "https://2000deba.github.io/todo-app-react/",
        image: "/todoreact.jpg",
        // image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800",
    },
    {
        title: "iChat App - Fullstack Chat App",
        description: "Real-time chat app using Socket.IO and Node.js.",
        link: "https://ichat-vtpa.onrender.com/",
        image: "/chatapp.jpg",
        // image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800",
    },
    {
        title: "Demo Education Website",
        description: "Single page website with sticky navbar which converts to hamburger menu ro navigation drawer for mobile devices.",
        link: "https://2000deba.github.io/Project-3/",
        image: "/education.jpg",
        // image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800",
    },
    {
        title: "Demo Food Delivery Website",
        description: "Single page website with Sticky navbar for both Laptop, Desktop/computer and all mobile devices.",
        link: "https://2000deba.github.io/Project-2/",
        image: "/fooddelivery.jpg",
        // image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?w=800",
    },
];

const Projects = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-20 text-white">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-12 text-center">
                    <p className="py-2 my-2">My Projects</p>
                    <p className="py-2 my-2">Things I've worked on. Some of them ---------</p></motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <a href={project.link} className="text-cyan-400 hover:underline">View Project →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects
