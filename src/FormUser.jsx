import { useState } from "react"
import './FormUser.css'

function FormUser({action}){
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")

    return <form action={action}>
        <input type="text" name="pseudo" onChange={e=>setPseudo(e.target.value)} placeholder="Votre nom"/>
        {pseudo.length > 0 && pseudo.length < 3 && <span>Le pseudo doit contenir au moins 3 caractères</span>}

        <input type="text" name="email" placeholder="Votre mail" onChange={e=>setEmail(e.target.value)}/>
        {(email.length > 0 && !email.includes('@')) && <span>L'email doit contenir un @</span>}

        <input type="text" name="description" placeholder="description"/>
        <button type="submit">Envoyer</button>
    </form>
}

export default FormUser