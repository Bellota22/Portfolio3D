import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
function About() {

  const [isCopied, setIsCopied] = React.useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('gvillanuevavega@gmail.com')  
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  
  }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full" > 
        {/* 1er span */}
        <div className="col-span-1  xl:row-span-3" >
          <div className="grid-container" >
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi I am Gabriel</p>
              <p className="grid-subtext">With 3 years of experience in web development
                and a passion for creating beautiful and functional websites, I am ready to take on your project.
              </p>
            </div>
          </div>
        </div>
        {/* 2do span */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-fuññ sm:w-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I have experience with HTML, CSS, JavaScript, React, Node.js, and more.</p>
            </div>
          
          </div>
        </div>
        {/* 3er span */}

        <div className="col-span-1 xl:row-span-4" >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotly across most timezones</p>
              <p className="grid-subtext">I am based in Ilo, Peru with remote work available</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-24" />
            </div>
          </div>
        </div>
        {/* 4to span */}
        <div className="xl:col-span-2 xl:row-span-3" >
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I love solving complex problems and creating beautiful and functional websites. Coding is not just my profession, it is my passion.</p>
            </div>
          </div>
        </div>
        {/* 5to span */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md::h[126px] sm:w-[276px] h-fit object-cover" />
            <div className="space-y-2" >
              <p className="grid-subtext text-center" >Contact me</p>
              <div className="copy-container" onClick={handleCopy} >
                <img src={isCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-6 h-6" />
                <p className="lg:text-2xl  md:text-xl font-medium text-gray_gradient text-white">{isCopied ? "Copied" : "gvillanuevavega@gmail.com"}</p>
              </div>
            </div>
          </div>
          
        </div>


      </div>

    </section>
  )
}

export default About