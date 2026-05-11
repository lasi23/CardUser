import './Card.css'

function Card({user}) {
    function handleMouseOver(e){
        e.currentTarget.classList.add("border")
    }
    function handleMouseLeave(e){
        e.currentTarget.classList.remove("border")
    }

    return <article className={'card ' + user.sexe} onMouseOver={e=>handleMouseOver(e)}
            onMouseLeave={e=>handleMouseLeave(e)}>
        <img src={user.image} alt="avatar"/>
        <h2>{user.pseudo}</h2>
        <h3>{user.email}</h3>
        <p>{user.description}</p>
    </article>
}

export default Card