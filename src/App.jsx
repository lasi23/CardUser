import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

const USER01 = {image:"https://picsum.photos/200", pseudo:"bob", email:"lemail@bob.fr", description:"ici une description"};
const USER02 = {image:"https://picsum.photos/200", pseudo:"charle", email:"autrmail@charle.fr", description:"ici une description"};
const USER03 =  {image:"https://picsum.photos/200", pseudo:"bill", email:"dermail@cha.fr", description:"ici une description"};
function App() {

  return <>
    <h1>Liste des utilisateurs</h1>
    <Card image={USER01.image} pseudo={USER01.pseudo} email={USER01.email} description={USER01.description}/>
    <Card image={USER02.image} pseudo={USER02.pseudo} email={USER02.email} description={USER02.description}/>
    <Card image={USER03.image} pseudo={USER03.pseudo} email={USER03.email} description={USER03.description}/>
    </>
  
}

export default App
