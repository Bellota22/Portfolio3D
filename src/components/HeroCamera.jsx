import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from 'maath'


function HeroCamera({children, isMobile}) {
  const groupRef = useRef()
  useFrame((state, delta) => {
    const target = [0, -3, 30]
    const smoothTime = 0.1
    easing.damp3(state.camera.position, target, smoothTime, delta)
    
    if (!isMobile) {
      easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.1, delta)
    }

  })

  return (

    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
      {children}
    </group>
  )
}

export default HeroCamera