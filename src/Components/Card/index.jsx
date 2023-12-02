import { useState } from "react"



export const Card = (props) => {
    const [reversed, setReversed] = useState(false)
    
const handleClick = () => {
    console.log('klik')
    setReversed(true);
  };

    return(
        <img onClick={handleClick} src={reversed?  `../../img/${props.name}` : '../../img/zadnistrana.png' } alt=""></img>
    )
}