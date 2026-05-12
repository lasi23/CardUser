import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import Like from './Like'

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
  const [search, setSearch] = useState("")

  const USERS_LIST = TAB_USERS.filter(e=> {
    if( !e.pseudo.includes(search)) return false
    return true
  })

  return <>      
    <h1>{TAB_USERS.length > 0 ? "Liste des utilisateurs" : "Aucun utilisateur d’inscrit"}</h1>
    
    {TAB_USERS.length > 0 && <p>il y a {TAB_USERS.length} utilisateurs inscrits !</p>   }

    {USERS_LIST.map((user, index) =>{
      return <> <Card 
      key={index} 
      user={user}
      />
      <Like/>
      </>
    })}
    <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
    
  </>
  
}

export default App
