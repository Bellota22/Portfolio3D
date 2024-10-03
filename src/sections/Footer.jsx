
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
          <a
            href="https://github.com/Bellota22"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/github.svg" alt="github" className="w-full "/>
          </a>
        </div>
        <div className="social-icon" >
          <a
            href="https://www.linkedin.com/in/gabvill/"
            target="_blank"
            rel="noreferrer"
          >

            <img src="/assets/linkedin.svg" alt="github" className="w-full "/>
          </a>
        </div>
        <p className="text-white-500">
          © 2022 Gabriel Villanueva Vega All Rights Reserved
        </p>
        
      </div>
    </footer>
  )
}

export default Footer