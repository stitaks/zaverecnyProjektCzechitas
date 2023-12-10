import { useEffect, useState } from 'react';
import './style.css';

export const Card = (props) => {
  const [card, setCard] = useState(props.card);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = () => {
    props.onClick();
  };

  return (
    <img
      className={'cardImg'}
      onClick={handleClick}
      src={
        card.reverse ? `/img/${card.image}` : '/img/zadnistrana.png'
      }
      alt=""
    ></img>
  );
};
