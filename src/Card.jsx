import './Card.css'

function Card({pseudo, image, email, description, sexe}) {
    function handleMouseOver(e, className){
        e.target.classList.add(className)
    }
    function handleMouseLeave(e, className){
        e.target.classList.remove(className)
    }
    const className =
        sexe === "homme"
        ? "lightblue"
        : sexe === "femme"
        ? "pink"
        : "lemonchiffon";

    return <article className='card' onMouseOver={e=>handleMouseOver(e,"border")}
            onMouseLeave={e=>handleMouseLeave(e, "border")} className={className}>
        <img className='bob' src={image} alt="avatar"
            onMouseOver={(event)=>event.stopPropagation()}
            onMouseLeave={(event)=>event.stopPropagation()}/>
        <h2 onMouseOver={(event)=>event.stopPropagation()}
            onMouseLeave={(event)=>event.stopPropagation()}>{pseudo}</h2>
        <h3 onMouseOver={(event)=>event.stopPropagation()}
            onMouseLeave={(event)=>event.stopPropagation()}>{email}</h3>
        <p onMouseOver={(event)=>event.stopPropagation()}
            onMouseLeave={(event)=>event.stopPropagation()}>{description}</p>
        <p onMouseOver={(event)=>event.stopPropagation()}
            onMouseLeave={(event)=>event.stopPropagation()}>{sexe}</p>
    </article>
}

export default Card