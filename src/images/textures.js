import  {NearestFilter, TextureLoader,RepeatWrapping} from 'three'
import {
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg,
} from './images' 


const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const grassTexture = new TextureLoader().load(grassImg)
const groundTexture = new TextureLoader().load(grassImg)
const woodTexture = new TextureLoader().load(woodImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;


groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping




export {
    dirtTexture,
    logTexture,
    glassTexture,
    grassTexture,
    groundTexture,
    woodTexture
}