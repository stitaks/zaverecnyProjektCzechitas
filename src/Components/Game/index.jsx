import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"
import { useEffect, useState } from 'react'

export const Game = (props) => {
    const [game, setGame] = useState(props.game);
    const [openCards, setOpenCards] = useState([]);

    useEffect(() => {
        if(openCards.length === 2){
            if(openCards[0].image !== openCards[1].image){
                openCards[0].reverse = false;
                openCards[1].reverse = false;
                setOpenCards([]);
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