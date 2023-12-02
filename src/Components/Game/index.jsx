import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"
import { useEffect, useState } from 'react'

export const Game = ({game}) => {
    const doubleFairytails = [
        ...game.cards,
        ...game.cards,
    ]

    const shuffleGame = doubleFairytails => doubleFairytails.sort(() => .5 - Math.random());
    shuffleGame(doubleFairytails);
    
    const [gameInState, setGameInState] = useState(game)
    useEffect(() => {
        console.log("JUPÍ")
    }, [gameInState])

    return (
        <div className="game">
            {doubleFairytails.map((card, index) => (
                <Card key={`${card.image}_${index}`} card={card} />
            ))}
        </div>
    )
}