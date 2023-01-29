import React from 'react'

export default function Footer() {
    const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
        {footerYear} Made With ❤
    </footer>
  )
}
