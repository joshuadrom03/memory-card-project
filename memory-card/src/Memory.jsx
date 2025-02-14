
import {useState } from "react"

    export function GenerateCards(){

        const [cards, setCards] = useState(["funny-alien", "pondering-alien", "sleeping-alien", "dancing-alien", "spinning-alien", "drinking-alien", "suspect-alien", "high-five-alien", "wave-alien"]);
        const [selectedCards, setSelectedCards] = useState([])
        const [score, setScore] = useState(0)
        const [highScore, setHighScore] = useState(0)

        const randomizeCards = () => {
            const random = [...cards].sort(() => Math.random() -0.5)
            setCards(random);

        }

        const gamePlay = (id) => {

            randomizeCards();
            id = (event.target.id)
            setSelectedCards((prevIds) => [...prevIds, id])

            if(selectedCards.includes(id)){
                setScore(0)
                setSelectedCards([])
            } else{
                displayScore();
                displayHighScore();
            }
            
        }

        const displayScore = () => {
            setScore((prevScore) => prevScore + 1)
        }

        const displayHighScore = () => {
            if(score >= highScore){
                setHighScore((prevHighScore) => prevHighScore + 1);
            }  else{
                setHighScore(highScore);
            }
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
                className="card"
                id={card}
                onClick={() => gamePlay(card) }
                >
                    <div className="card-text">{card}</div>
                </div>
                ))}

                </div>
                
            </div>
        )
    }


