import { useEffect, useState } from 'react';
import './style.css';

export const Card = ({ card }) => {
  const [isReverse, setIsReverse] = useState(card.reverse);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    card.reverse = true;
  }, [isReverse]);

  const handleClick = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setIsReverse(true);
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
      src={isReverse ? `../../img/${card.image}` : '../../img/zadnistrana.png'}
      alt=""
    ></img>
  );
};
