"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "", });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (result.success) {
            toast.success("Message Sent Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setStatus("✅ Message Sent Successfully!");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
            toast.error(result.message || "Failed to send message.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setStatus(`❌ ${result.message || "Failed to send message."}`);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="max-w-4xl mx-auto px-4 py-20 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-8 text-center">
                    Contact Me
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-lg text-gray-300 mb-10">
                    Have a project in mind or just want to say hi? Fill out the form below.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-semibold">Full Name</label>
                            <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" placeholder="Your Name" required id="name" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-semibold">Phone Number</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" placeholder="+91 12345 67890" pattern="[0-9+ ]+"
                                required id="phone" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-semibold">Email Address</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" placeholder="you@example.com" required id="email" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-semibold">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400" rows="5" placeholder="Ellaborate your concern..."></textarea>
                        </div>
                        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                            Send Message
                        </button>
                        {status && <p className="mt-4 text-center">{status}</p>}
                    </motion.form>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-4">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Information</h2>
                        <p className="text-gray-300">Feel free to reach out via any of the following methods:</p>
                        <div className="space-y-3">
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 mr-2" />
                                <strong>Email:</strong> <a href="mailto:deep2000seal@gmail.com" className="text-cyan-400 hover:underline">deep2000seal@gmail.com</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faGithub} className="text-cyan-400 mr-2" />
                                <strong>GitHub:</strong> <a href="https://github.com/2000Deba" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/2000Deba</a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLinkedin} className="text-cyan-400 mr-2" />
                                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/debasish-seal" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/debasish-seal</a>
                            </p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400 mr-2" />
                                <strong>Location:</strong> Kolkata, India</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Contact