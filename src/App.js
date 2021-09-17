import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei';
import { Physics } from '@react-three/cannon'
//world
import Lightning from './world/AmbientLight'
import Camera from './world/Camera';
//objects
import Box from './objects/Box'
import Plane from './objects/Plane'
import Ferrari from './objects/Ferrari'

import './App.css';
import Effects from './world/Effects'

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 1500, 3000],
        fov: 100,
        near: 1,
        far: 20000
      }}>
      <Effects />
      <fog args={['#222222', 0.6, 2.8]} />
      {/* <Camera /> */}
      <Plane />
      <OrbitControls autoRotate />
      <Environment files="textures/studio.hdr" />
      <Lightning args={[0xffffbb, 0x080820, 1]}/>
      <Ferrari
        scale={1}
        rotation={[-Math.PI/2.5, 0, 0]}
        position={[0, 1000, 0]}
      />
    </Canvas>
  );
}

export default App;
