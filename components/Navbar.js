"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -16,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -16,
        scale: 0.98,
        transition: {
            duration: 0.45,
            ease: [0.4, 0, 1, 1],
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.4,
            ease: "easeOut",
        },
    }),
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const navRef = useRef(null)
    const pathname = usePathname()

    /* Close on route change */
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    /* Outside click close */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [menuOpen])

    return (
        <nav ref={navRef} className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Debasish</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-6 text-sm">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`transition hover:text-blue-400 ${pathname === link.href
                                        ? "text-blue-400 font-semibold"
                                        : ""
                                        }`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link href="https://github.com/2000Deba" target="_blank">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md ring-1 ring-white cursor-pointer">
                            <Image src="/github.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
                            <span>GitHub</span>
                        </button>
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden relative w-8 h-8"
                    onClick={(e) => {
                        e.stopPropagation()
                        setMenuOpen(prev => !prev)
                    }}>
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-2 left-1 w-6 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-4 left-1 w-6 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-6 left-1 w-6 h-0.5 bg-white"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden mt-4 bg-gray-800 rounded-xl p-5 space-y-4 shadow-xl">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible">
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block transition hover:text-blue-400 ${pathname === link.href
                                        ? "text-blue-400 font-semibold"
                                        : ""
                                        }`}>
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            custom={navLinks.length}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible">
                            <Link
                                href="https://github.com/2000Deba"
                                target="_blank"
                                onClick={() => setMenuOpen(false)}>
                                <button className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md ring-1 ring-white">
                                    <Image src="/github.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
                                    <span>GitHub</span>
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
