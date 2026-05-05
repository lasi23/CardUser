import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

const TAB_USERS = [{
  image:"https://picsum.photos/200", 
  pseudo:"bob", 
  email:"lemail@bob.fr", 
  description:"ici une description"
},
{
  image:"https://picsum.photos/200", 
  pseudo:"charle", 
  email:"autrmail@charle.fr", 
  description:"ici une description"
},
{
  image:"https://picsum.photos/200",
  pseudo:"bill", 
  email:"dermail@cha.fr", 
  description:"ici une description"
}]

function App() {

  return <>
    <h1>Liste des utilisateurs</h1>

    {TAB_USERS.map((tabusr, index) =>
      <Card 
      key={index} 
      image={tabusr.image} 
      pseudo={tabusr.pseudo} 
      email={tabusr.email}
      description={tabusr.description}/>
    )}  
    
  </>
  
}

export default App
