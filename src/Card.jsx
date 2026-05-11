import './Card.css'

function Card({user}) {


    return <article className={'card '+user.sexe}>
        <img src={user.image} alt="avatar" />
        <h2>{user.pseudo}</h2>
        <h3>{user.email}</h3>
        <p>{user.description}</p>
    </article>
}

export default Card