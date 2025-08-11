"use client"

import React from 'react'
import { ReactTyped } from 'react-typed'

const TypedText = () => {
    return (
        <div>
            <p className="text-lg md:text-xl mb-6">
                A passionate{" "}
                <span className="font-semibold text-cyan-400">
                    <ReactTyped
                        strings={[
                            "Full-Stack Web Developer",
                            "MERN Stack Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            "Web Designer",
                            "Mechanical Engineer",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </span>{" "}
                building modern, scalable web applications.
            </p>
        </div>
    )
}

export default TypedText
