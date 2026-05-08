import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

// ************************tableau utilisateur************************
const TAB_USERS = [{
  image:"https://picsum.photos/200", 
  pseudo:"bob", 
  email:"lemail@bob.fr", 
  description:"ici une description",
  sexe:"non-binaire"
},
{
  image:"https://picsum.photos/200", 
  pseudo:"charle", 
  email:"autrmail@charle.fr", 
  description:"ici une description",
  sexe:"femme"
},
{
  image:"https://picsum.photos/200",
  pseudo:"bill", 
  email:"dermail@cha.fr", 
  description:"ici une description",
  sexe:"homme"
}]

function App() {

  return <>
      
    <h1>{TAB_USERS.length > 0 ? "Liste des utilisateurs" : "Aucun utilisateur d’inscrit"}</h1>
    
    {TAB_USERS.length > 0 && <p>il y a {TAB_USERS.length} utilisateurs inscrits !</p>   }

    {TAB_USERS.map((tabusr, index) =>
      <Card 
      key={index} 
      image={tabusr.image} 
      pseudo={tabusr.pseudo} 
      email={tabusr.email}
      description={tabusr.description}
      sexe={tabusr.sexe}
      />     
    )}      
  </>
  
}

export default App
