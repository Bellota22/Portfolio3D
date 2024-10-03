import React from 'react'

function Footer() {
  return (
    <footer className="c-space mt-20 pt-8 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Pivacy Policy</p>
      </div>
      <div className="flex gap-3" >
        <div className="social-icon" >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2"/>
        </div>
        <p className="text-white-500">
          © 2022 Gabriel Villanueva Vega All Rights Reserved
        </p>
        
      </div>
    </footer>
  )
}

export default Footer