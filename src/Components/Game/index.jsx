import './style.css';
import { Card } from '../Card';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import './style.css'
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
    const [isFinished, setIsFinished] = useState(false)
    const [showText, setShowText] = useState(false)

    const isActiveRef = useRef(true)
    const fireWorksRef = useRef(null)

    useEffect(() => {
        setOpenCards([])
        setCards(randomizeCards(props.game.cards))
        setIsFinished(false)
        setShowText(false)
    }, [props.game])

    useEffect(() => {
        if(!isFinished){
            return;
        }

        fireWorksRef.current?.start();

        setTimeout(() => {
            fireWorksRef.current?.stop();
            
            setShowText(true)
        }, 5000)
    })

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
                }, 1000)
            }
            else {
                isActiveRef.current = true;
                if (cards.every((card) => card.reverse)) {
                    setTimeout(() => {setIsFinished(true)}, 1000)
                }
            }
            setOpenCards([]);
        }
    }, [openCards])


    return (
        <>
            <Button nameTails="" name="Zpět" />
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

                            console.log(newCards)

                            if (!card.reverse) {
                                setOpenCards([...openCards, card])
                            }

                            setCards(newCards)
                        }}
                        setOpenCards={setOpenCards} />
                ))) : (
                <>
                {!showText && (
                <>
                <div>Gratulujeme!!!</div>
                <Fireworks
                    ref={fireWorksRef}
                    options={{ opacity: 0.5 }}
                    style={{
                        top: '100px',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                    }}
                />
                </>)}
                {showText && 
                <>
                
                <div className='textConteiner'><h1>{props.game.name}</h1>{props.game.fairytale}</div>
                </>}
                </>)}
            </div>
        </>
    )
}
