import React from 'react'
import * as THREE from 'three'
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei'


const Portfolio = () => {
    const { scene } = useGLTF('./portfolio.glb');
    return (
            <primitive object={scene} scale={0.3} />
    );
};

const Main = () => {

    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3} />
            <Portfolio/>
            <PerspectiveCamera position={[1, 6, -8]} makeDefault={true} />
        </>
    )
}

export default Main