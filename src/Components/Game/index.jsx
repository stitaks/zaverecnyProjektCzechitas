import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"

export const Game = (props) => {
    const doubleFairytails = [
        ...props.game.cards,
        ...props.game.cards,
    ]
    const shuffleGame = doubleFairytails => doubleFairytails.sort(() => .5 - Math.random());
    shuffleGame(doubleFairytails);

    return (
        <div className="game">
            {doubleFairytails.map((card, index) => (
                <Card key={`${card.image}_${index}`} card={card} />
            ))}
        </div>
    )
}