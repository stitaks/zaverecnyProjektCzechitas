import { useEffect, useState } from 'react';
import './style.css';

export const Card = (props) => {
  const [card, setCard] = useState(props.card);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setCard({ ...card, reverse: true });
      props.setOpenCards([...props.openCards, ...[card]]);
      setTimeout(() => {
        setShowAnimation(false);
      }, 500);
    }, 500);
  };

  return (
    <img
      className={`cardImg${showAnimation ? ' animate' : ''}${
        isReverse ? ' back' : ' front'
      }`}
      onClick={handleClick}
      src={
        card.reverse ? `../../img/${card.image}` : '../../img/zadnistrana.png'
      }
      alt=""
    ></img>
  );
};
