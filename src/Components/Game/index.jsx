import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"
import { useEffect, useRef, useState } from 'react'

export const Game = (props) => {
    const [cards, setCards] = useState(props.game.cards.map((card) => {
        return {
            ...card,
            order: Math.random() * 100,
        }
    }).sort((a,b) => a.order - b.order));
    const [openCards, setOpenCards] = useState([]);

    const isActiveRef = useRef(true)

    useEffect(() => {
        if (openCards.length === 2) {
            isActiveRef.current = false;

            if (openCards[0].image !== openCards[1].image) {
                setTimeout(() => {
                    setCards((previousCard) => {
                        return previousCard.map((card) => {
                            if (card.id === openCards[0].id) {
                                return {
                                    ...card,
                                    reverse: false,
                                };
                            }
                            if (card.id === openCards[1].id) {
                                return {
                                    ...card,
                                    reverse: false,
                                };
                            }

                            return card;
                        })
                    })
                    isActiveRef.current = true;
                }, 2000)
            }
            else {
                isActiveRef.current = true;
            }
            setOpenCards([]);
        }
    }, [openCards])


    return (
        <div className='back'>Back</div>
        <div className="game">
            {cards.map((card, index) => (
                <Card
                    key={`${card.id}_${card.reverse}`}
                    card={card}
                    onClick={() => {
                        if(!isActiveRef.current){
                            return;
                        }
                        const newCards = cards.map((newCard) => {
                            if (newCard.id === card.id) {
                                return {
                                    ...newCard,
                                    reverse: !newCard.reverse ? true : true
                                };
                            }
                            return newCard;
                        });

                        console.log(newCards)

                        if (!card.reverse) {
                            setOpenCards([...openCards, card])
                        }

                        setCards(newCards)
                    }}
                    setOpenCards={setOpenCards} />
            ))}
        </div>
    )
}
