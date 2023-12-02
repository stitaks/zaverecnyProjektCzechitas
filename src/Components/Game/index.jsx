import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"
import { useEffect, useState } from 'react'

export const Game = ({game}) => {
    
    const [openCards, setOpenCards] = useState([]);

    useEffect(() => {
        if(openCards.length === 1){
            if(openCards[0] !== openCards[1]){
                console.log(openCards)
            }
        }
    }, [openCards])

    return (
        <div className="game">
            {game.cards.map((card, index) => (
                <Card 
                key={`${card.image}_${index}`} 
                card={card} 
                setOpenCards={setOpenCards} 
                openCards={openCards}/>
            ))}
        </div>
    )
}