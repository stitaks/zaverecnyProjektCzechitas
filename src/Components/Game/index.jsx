import './style.css'
import { Card } from "../Card"
import { fairytails } from "../../Constants/index"



export const Game = (props) => {

    const doubleFairytails = [
        ...props.game.images,
        ...props.game.images,
    ]
    const shuffleGame = doubleFairytails => doubleFairytails.sort(() => .5 - Math.random());
    shuffleGame(doubleFairytails);


    return (
        <div className="game">
            {doubleFairytails.map((image, index) => (
                <Card key={`${image}_${index}`} name={image}/>
            ))}
        </div>
    )
}