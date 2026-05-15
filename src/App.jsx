import { Fragment, useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import Like from './Like'
import FormUser from './FormUser'

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

function addUserAction(previousState, formData) {
  const pseudo = formData.get('pseudo')
  const email = formData.get('email')
  const description = formData.get('description')

  if (pseudo.length < 3 || !email.includes('@')) {
    return previousState
  }

  const newUser = {
    image: "https://picsum.photos/200",
    sexe: "non-binaire",
    pseudo,
    email,
    description
  }

  return [...previousState, newUser]
}

function App() {
  const [search, setSearch] = useState("")
  const [users, formAction] = useActionState(addUserAction, TAB_USERS)

  const USERS_LIST = users.filter(e=> {
    if( !e.pseudo.includes(search)) return false
    return true
  })
  

  return <>      
    <h1>{users.length > 0 ? "Liste des utilisateurs" : "Aucun utilisateur d’inscrit"}</h1>
    
    {users.length > 0 && <p>il y a {users.length} utilisateurs inscrits !</p>   }

    <FormUser action={formAction}/>

    {USERS_LIST.map((user, index) =>{
      return <Fragment key={user.pseudo}> <Card 
      key={index} 
      user={user}
      />
      <Like/>
      </Fragment>
    })}
    <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
    
  </>
  
}

export default App
