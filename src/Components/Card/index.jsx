import { useState } from 'react';
import './style.css';

export const Card = (props) => {
  const [reversed, setReversed] = useState(false);
  
  const handleClick = () => {
    setReversed(true);
  };

  return (
    <img
      className="cardImg"
      onClick={handleClick}
      src={reversed ? `../../img/${props.card.image}` : '../../img/zadnistrana.png'}
      alt=""
    ></img>
  );
};
