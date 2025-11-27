import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#5A6C57] text-[#F1FCF7] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Paisley Highland Games. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm tracking-wide">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/news" className="hover:underline">News</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
