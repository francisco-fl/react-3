import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

const Box = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const texture = useLoader(TextureLoader, 'textures/terrazo.png')

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
  useFrame(state => (
    mesh.current.rotation.y = mesh.current.rotation.y += 0.001,
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001
  ))
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={hovered ? 1.01 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <sphereGeometry
            attach="geometry"
            args={[10, 32, 32]}
            widthSegments={100}
        />
        {/* <meshPhysicalMaterial {...materialProps} attach="material"/> */}
        <meshStandardMaterial
            attach="material"
            roughness={0.1}
            reflectivity={.6}
            metalness={.6}
            map={texture}
        />
      </mesh>
    )
  }

export default Box