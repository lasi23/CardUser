import './Card.css'

function Card({pseudo, image, email, description}) {
    return <article className='card'>
        <img className='bob' src={image} alt="" />
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
    </article>
}

export default Card