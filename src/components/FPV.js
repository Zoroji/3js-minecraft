import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber'
import React from 'react'

const FPV = () => {
    
    const {camera,gl} = useThree();

    return (
        <PointerLockControls args={[camera]} />
    )
}

export default FPV