import { Stars, Sky } from '@react-three/drei'

const AmbientLight = () => (
    <>
        <Sky scale={20000} sunPosition={[500, 350, -1000]} turbidity={1} Rayleigh={1} />
        <color attach="background" args={['#000']} />
        {/* <Stars /> */}
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, 0]} rota/>
        <spotLight intensity={.1} position={[0,50, 0]} penumbra={1}/>
    </>
)

export default AmbientLight