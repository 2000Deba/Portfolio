import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-1 text-center">
        <p className="text-sm sm:text-base">
          Copyright &copy; {currentYear} Debasish Seal Portfolio. All rights reserved.
        </p>

        <p className="text-xs sm:text-sm text-gray-400">
          Created with ❤️ by <span className="font-semibold text-white">Deba</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
