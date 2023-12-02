import './style.css'
import { Card } from "../Card"

export const Game = (props) => {
    return (
        <div className="game">
            {props.game.images.map((image) => (
                <Card key={image} name={image}/>
            ))}
        </div>
    )
}