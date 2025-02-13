
import { useState } from "react"

    export function GenerateCards(){

        const [cards, setCards] = useState(["funny-alien", "pondering-alien", "sleeping-alien", "dancing-alien", "spinning-alien", "drinking-alien", "suspect-alien", "high-five-alien", "wave-alien"]);
        const [className, setClassName] = useState("card")
        const [score, setScore] = useState(0)
        const [highScore, setHighScore] = useState(0)

        const randomizeCards = () => {
            const randomArr = ["", " ", " ", " ", " ", " ", " ", " ", " "];
        }


        return(
        
            <div className="container">
                <div className="header">
                    <h1>Memory Game!</h1>
                    <h2>click an alien and then click a different one.Remember, clicking an alien you already clicked will reset your score!</h2>
                </div>

                <div className="scoreboard">
                    <h2>Score: {score}</h2>
                    <h2>High Score: {highScore}</h2>
                </div>

                <div className="cards-container">
                {cards.map((card, index) => (
                <div key={index} 
                className={className} 
                id= {card}
                onClick={() => randomizeCards()}>
                    <div className="card-text">{card}</div>
                </div>
                ))}

                </div>
                
            </div>
        )
    }


