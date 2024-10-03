import { Float, useGLTF } from '@react-three/drei'

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={2} >
      <group
        scale={0.01}
        position={[8,8,0]}
        dispose={null}
        {...props}
        >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.9, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[15.39, 15.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
