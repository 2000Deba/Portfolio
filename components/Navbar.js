"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md sticky top-0 z-50">
                <h1 className="text-xl font-bold">Debasish</h1>
                <ul className="flex gap-6 text-sm">
                    <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                    <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
