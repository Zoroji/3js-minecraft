import React from 'react'
import { useStore } from '../hooks/useStore'


export const Menu = () => {

    const [saveWorld,resetWorld] = useStore((state) => [state.saveWorld,state.saveWorld])

  return (
   <div className='menu absolute'>
    <button onClick={ ()=> saveWorld()}>Save</button>
    <button onClick={ ()=> resetWorld()}>Reset</button>
   </div>
  )
}
