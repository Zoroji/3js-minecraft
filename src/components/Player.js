import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';
import useKeyboard from '../hooks/useKeyboard';


const JUMP_FORCE = 4
const SPEED = 4;

const Player = () => {

    const { moveBackward, moveForward, moveLeft, moveRight, jump } = useKeyboard();

    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1.5, 0],
    }))

    const vel = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    const pos = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {

        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        const direction = new  Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (
                (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
            )
        )

        const sideVector = new Vector3(
            (
                (moveLeft ? 1 : 0) - (moveRight ? 1 : 0)
            ),
            0,
            0,
        )

        direction
        .subVectors(frontVector,sideVector) // diagonal
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation) //making the movement relative to where the camera is facing


        api.velocity.set(direction.x,vel.current[1],direction.z)

        // api.velocity.set(0,1,0)
        if (jump && Math.abs(vel.current[1]) < 0.02) {
            api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2])
        }
    })

    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default Player