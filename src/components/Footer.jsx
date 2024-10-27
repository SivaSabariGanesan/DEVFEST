import React from 'react'
import { Instagram, Linkedin, Zap } from 'lucide-react'

export function Footer() {
  const FooterLink = ({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="footer-icon">
      <Icon className="h-8 w-8 text-[#c3ff00] hover:text-[#ff00ff] transition duration-300" />
    </a>
  )

  return (
    <footer className="bg-black text-[#c3ff00] py-12 font-mono">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex flex-col sm:flex-row items-center gap-6">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0">Follow DEVS REC ON</h2>
          <div className="flex gap-6">
            <FooterLink
              icon={Instagram}
              link="https://www.instagram.com/recdevs/profilecard/?igsh=MWo4dzc3NjRkMDJscg=="
            />
            <FooterLink
              icon={Linkedin}
              link="https://www.linkedin.com/in/devs-rec?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div> 
        </div>
        <p className="text-xs glitch-text mb-4">
          © 2024 DEVS Club. All rights reserved.
        </p>
        <p className="text-xl font-semibold text-[#c3ff00] bg-clip-text">
          Website developed by <br /> <a href="https://www.linkedin.com/in/dhanush-t-s-734481271/" className='text-2xl' target='_blank'> DHANUSH </a>
        </p>
        {/* <Zap className="h-12 w-12 text-[#c3ff00] animate-pulse" /> */}
      </div>
    </footer>
  )
}