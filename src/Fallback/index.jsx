import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshWobbleMaterial } from '@react-three/drei';

import Lato from '../Fonts/Golden.json'
import { CarPaint } from '../Materials'

const Fallback = () => {
    const font = new THREE.FontLoader().parse(Lato)
    const text = useRef()
    const plane = useRef()
    return (
        <Canvas camera={{ position: [0, 300, 300], fov: 100, near: 1, far: 20000 }}>
            <ambientLight intensity={2} />
            <color attach="background" args={['pink']} />
            <mesh
                ref={plane}
                position={[
                    0, -100, 0
                ]}
                rotation={[
                    Math.PI/2,
                    Math.PI/8,
                    Math.PI/6
                ]}
            >
                <sphereGeometry
                    args={[
                        1000,
                        100,
                        100
                    ]}
                />
                <MeshWobbleMaterial
                    attach="material"
                    wireframe
                    color="#00ffea"
                    factor={.2}
                    speed={1}
                />
            </mesh>
            <mesh
                ref={text}
                position={[-350, -60, 0]}
                rotation={[
                    Math.PI / 10,
                    Math.PI / 8,
                    - Math.PI / 12
                ]}
            >
                <textGeometry
                    attach="geometry"
                    args={[
                        'DUBAI DREAMS',
                        {
                            font: font,
                            size: 100,
                            height: 10
                        }
                    ]}
                />
                <meshStandardMaterial color="" attach="material" />
            </mesh>
        </Canvas>
    )
}

export default Fallback