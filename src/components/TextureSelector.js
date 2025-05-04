import React, { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import useKeyboard from '../hooks/useKeyboard';
import { dirtImg,grassImg,glassImg,logImg,woodImg } from '../images/images';


const images ={
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
}


function TextureSelector() {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);

    // Destructure keys from useKeyboard hook
    const { dirt, grass, glass, wood, log } = useKeyboard();

    const textures = { dirt, grass, glass, wood, log };

    // Effect to detect when a texture key is pressed
    useEffect(() => {
        // Find which texture key is pressed
        const pressedTexture = Object.entries(textures).find(([key, value]) => value);
        if (pressedTexture) {
            console.log('Pressed texture:', pressedTexture[0]);
            setTexture(pressedTexture[0]); // Set the active texture to the pressed one
        }
    }, [setTexture, dirt, grass, glass, wood, log]);

    // Effect to show texture selector briefly after a change
    useEffect(() => {
        setVisible(true); // Set visibility to true when the activeTexture changes
        const visibilityTimeout = setTimeout(() => {
            setVisible(false); // Hide the texture selector after 2 seconds
        }, 2000);
        return () => {
            clearTimeout(visibilityTimeout); // Cleanup the timeout
        };
    }, [activeTexture]);

    return visible && (
        <div className='absolute centered texture-selector'>
            {Object.entries(images).map(([k,src]) =>{
                return (<img
                    className={`${k === activeTexture ? 'active' : ''}`} // Apply 'active' class conditionally
                    key={k}
                    src={src}
                    alt={k}
                />)
            })}
        </div>
    );
}

export default TextureSelector;
