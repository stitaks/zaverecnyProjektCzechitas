
import { Card } from "../Card"

export const Game = (props) => {
    return (
        props.game.images.map((image) => (
            <Card key={props.name} name={image}/>
        ))
    )
}