"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="flex flex-wrap justify-between items-center gap-4">
                {/* Left side (Logo) */}
                <h1 className="text-xl font-bold">Debasish</h1>

                {/* Right side (Menu) */}
                <div className="flex items-center gap-4 flex-wrap">
                    <ul className="flex flex-wrap gap-4 text-sm">
                        <li><Link href="/" className="hover:text-blue-400 cursor-pointer">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-400 cursor-pointer">About</Link></li>
                        <li><Link href="/projects" className="hover:text-blue-400 cursor-pointer">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
                    </ul>
                    <Link href="https://github.com/2000Deba" target="_blank">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md ring-white ring-1 cursor-pointer">
                            <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                            <span>GitHub</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar