import React from 'react'
import { useLoader } from '@react-three/fiber'
import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass'
import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader'

const Effects = () => {
    const { texture3D } = useLoader(LUTCubeLoader, 'textures/cubicle-99.CUBE')
    return <Effects children={<LUTPass attachArray="passes" lut={texture3D} />} />
}

export default Effects