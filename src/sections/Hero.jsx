import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HackerRoom } from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import { ReactLogo } from '../components/ReactLogo'
import Rings from '../components/Ring'
import Cube from '../components/Cube'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
function Hero() {
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   scale : {
  //     value: 2.5,
  //     min: 0,
  //     max: 10
  //   }
    
  // })

  const isSmall = useMediaQuery({maxWidth: 440})
  const isMobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
    

  return (
    <section className="min-h-screen w-full flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl  font-medium text-white text-center font-generalsans">Hi, I am Gabriel <span className="waving-hand" >😎</span></p>
        <p className="hero_tag text-gray_gradient" >Building products and brands</p>
        
        <div className="w-full h-full absolute inset-0" >
          {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.5, -3.3, -6.3]}
                />

              </HeroCamera>
              
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
              
              <ambientLight intensity={1}  />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            
            </Suspense>
          </Canvas>

        </div>
        <div className="absolute bottom-24 left-0 right-0 w-full z-10 c-space" >
          <a href="#about" className="w-fit" >
          <Button
            isBeam
            name="Let's work together" 
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero