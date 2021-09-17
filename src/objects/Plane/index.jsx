import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import { Water } from 'three-stdlib'

extend({ Water })

const Plane = (props) => {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, 'textures/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(1000000, 1000000), [])
    const config = useMemo(
      () => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xff0000,
        waterColor: 0x001e0f,
        distortionScale: 0,
        fog: true,
        format: gl.encoding
      }),
      [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
  }

export default Plane