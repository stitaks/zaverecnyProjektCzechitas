import './style.css'
import { Card } from "../Card"
import { useEffect, useRef, useState } from 'react'
import { Fireworks } from '@fireworks-js/react'


const randomizeCards = (cards) => {
    return (
        cards.map((card) => {
            return {
                ...card,
                order: Math.random() * 100,
            }
        }).sort((a, b) => a.order - b.order));
}

export const Game = (props) => {
    const [cards, setCards] = useState(randomizeCards(props.game.cards));
    const [openCards, setOpenCards] = useState([]);
    const [isFinished, setIsFinished] = useState(true)

    const isActiveRef = useRef(true)

    useEffect(() => {
        setOpenCards([])
        setCards(randomizeCards(props.game.cards))
    }, [props.game])

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
                if (cards.every((card) => card.reverse)) {
                    setIsFinished(true)
                }
            }
            setOpenCards([]);
        }
    }, [openCards])

    const ref = useRef(null)

    const toggle = () => {
        if (!ref.current) return
        if (ref.current.isRunning) {
            ref.current.stop()
        } else {
            ref.current.start()
        }
    }


    return (
        <>
            <div className='back'>Back</div>
            <div className="game">
                {!isFinished ? (cards.map((card, index) => (
                    <Card
                        key={`${card.id}_${card.reverse}`}
                        card={card}
                        onClick={() => {
                            if (!isActiveRef.current) {
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

                            if (!card.reverse) {
                                setOpenCards([...openCards, card])
                            }

                            setCards(newCards)
                        }}
                        setOpenCards={setOpenCards} />
                ))) : (<Fireworks
                    ref={ref}
                    options={{ opacity: 0.5 }}
                    style={{
                      top: '100px',
                      left: 0,
                      width: '100%',
                      height: '100%',
                      position: 'fixed',
                    }}
                  />
            )}
            </div>
        </>
    )
}
