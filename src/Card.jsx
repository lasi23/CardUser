import './Card.css'

function Card({pseudo, image, email, description, sexe}) {

    const className =
        sexe === "homme"
        ? "lightblue"
        : sexe === "femme"
        ? "pink"
        : "lemonchiffon";

    return <article className='card' className={className}>
        <img className='bob' src={image} alt="avatar" />
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
        <p>{sexe}</p>
    </article>
}

export default Card