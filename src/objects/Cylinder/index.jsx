import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

const Cylinder = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const texture = useLoader(TextureLoader, 'textures/cylinder.jpeg')
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (
        mesh.current.rotation.y -= 0.002
    ))


    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <cylinderGeometry
                attach="geometry"
                args={[1.4, 1.4, 6, 32]}
            />
            <meshStandardMaterial
                attach="material"
                roughness={0}
                reflectivity={1}
                map={texture}
            />
        </mesh>
    )
}

export default Cylinder