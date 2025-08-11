import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div>
      <footer className='bg-gray-900 text-white flex justify-center items-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Debasish Seal Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
