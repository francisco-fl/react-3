import React, { useState } from 'react'
import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader'
import { PerspectiveCamera, PositionalAudio } from '@react-three/drei'

const Camera = () => {
    const [height, setHeight] = useState(400)
    const [width, setWidth] = useState(400)
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    // useFrame(state => {
    //     setx(state.mouse.x)
    //     sety(state.mouse.y)
    // })

    return (
        <mesh position={[0,0,10]}> 
            <PerspectiveCamera
                // makeDefault
                aspect={12}
                far={3000}
                fov={50}
                zoom={1}
            />
        </mesh>
    )
}

export default Camera