import { useState } from "react"
import './Like.css'

function Like(){
    const [like, setLike] = useState(42)
    

    function handleClick(e){
        event.target.classList.toggle('like')
        if(event.target.classList.contains('like')){
            setLike(like + 1)
        }else{
            setLike(like - 1)
        }
    }
    return <div>
        <div className="grey" onClick={e=>handleClick(e)}>
        {like} like
        </div>
    </div>
}

export default Like