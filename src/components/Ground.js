import { usePlane } from '@react-three/cannon'
import React from 'react'
import {groundTexture} from '../images/textures'
import { useStore } from '../hooks/useStore';


function Ground() {

  const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
	}))
	const [addCube] = useStore((state) => [state.addCube])


	groundTexture.repeat.set(100, 100)

	return (
		<mesh
			onClick={(e) => {
				e.stopPropagation()
				const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
				addCube(Math.round(x), Math.round(y), Math.round(z))
			}}
			ref={ref}
		>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshStandardMaterial attach='material' map={groundTexture} />
		</mesh>
	)
}

export default Ground