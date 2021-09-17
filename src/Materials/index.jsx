import { useLoader } from "@react-three/fiber"
import { TextureLoader, DoubleSide } from 'three'

export const CarPaint = () => (
    <meshStandardMaterial reflectivity={1} metalness={1} color="gold" roughness={0.2}  side={DoubleSide} />
)

export const Leather = () => {
    const map = useLoader(TextureLoader, 'textures/leather.jpeg')
    const normalMap = useLoader(TextureLoader, 'textures/leather_normal.jpg')
    const roughnessMap = useLoader(TextureLoader, 'textures/leather_rough.jpg')
    return (
        <meshStandardMaterial
            roughness={.5}
            reflectivity={.3}
            metalness={0.2}
            color="black"
            // map={map}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
        />
    )
}

export const Glass = () => (
    <meshStandardMaterial transparent refractionRatio={1} reflectivity={1} metalness={1} side={DoubleSide} opacity={0.4} color="black"/>
)

export const RedGlass = () => <meshStandardMaterial color="red" transparent opacity={0.9} side={DoubleSide} refractionRatio={1} reflectivity={1} roughness={.6} />

export const OrgangeGlass = () => <meshStandardMaterial color="orange" transparent opacity={.9} side={DoubleSide} refractionRatio={1} reflectivity={1} roughness={.6}  />

export const Rims = () => (
    <meshStandardMaterial reflectivity={1} metalness={1} color="black" roughness={0.2}/>
)

export const CarbonFibre = () => {
    const map = useLoader(TextureLoader, 'textures/carbon.jpeg')

    return (
        <meshStandardMaterial
            roughness={1}
            reflectivity={.3}
            metalness={.5}
            map={map}
            side={DoubleSide}
        />
    )
}

export const Grill = () => <meshStandardMaterial color="black" opacity={0.95} metalness={1}/>

export const Mirror = () => <meshStandardMaterial color="white" metalness={1} roughness={0} reflectivity={1}/>