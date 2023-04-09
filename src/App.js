import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import MultipleChoice from "./components/MultipleChoice";
import { CSV } from "./locations.js"
import { useEffect, useState } from "react";

function parseCsv(csvData) {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    return rows.slice(1).map(row => {
        const values = row.split(',');
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = values[i];
        });
        return obj;
    });
}

function getChoices(maxIndex, n) {
    const result = [];
    while (result.length < n) {
        const randomNumber = Math.floor(Math.random() * (maxIndex));
        if (!result.includes(randomNumber)) {
            result.push(randomNumber);
        }
    }
    return result;
}

const data = parseCsv(CSV);
let choices = getChoices(data.length, 4)
let answer = choices[Math.floor(Math.random() * (choices.length))]

function App() {
    // logic to select location
    const [gameState, setGameState] = useState(
        {
            hiScore: 0,
            streak: 0,
            turn: 1,
            history: [],
            scores: [],
        }
    )

    function restart() {
        setGameState(prevGameState => (
            {
                ...prevGameState,
                streak: 0,
                turn: 1,
                scores: [...prevGameState.scores, prevGameState.streak],
                history: [],
            }
        ))

        choices = getChoices(data.length, 4)
        answer = choices[Math.floor(Math.random() * (choices.length))]
    }

    function userInput(id) {
        setGameState(prevGameState => (
            {
                ...prevGameState,
                history: [...prevGameState.history, answer],
            }
        ))

        let answerId = data[answer].id
        if (id === answerId) {
            setGameState(prevGameState => (
                {
                    ...prevGameState,
                    streak: prevGameState.streak + 1,
                    turn: prevGameState.turn + 1,
                }
            ))

            choices = getChoices(data.length, 4)
            answer = choices[Math.floor(Math.random() * (choices.length))]
            while (gameState.history.includes(answer)) {
                if (gameState.history.length === data.length) {
                    setGameState(prevGameState => (
                        {
                            ...prevGameState,
                            history: [],
                        }
                    ))
                    break
                }
                answer = choices[Math.floor(Math.random() * (choices.length))]
            }

        } else {
            setGameState(prevGameState => (
                {
                    ...prevGameState,
                    turn: 0,
                }
            ))
        }
        console.log(gameState.history)
    }
    useEffect(() => {
        const data = window.localStorage.getItem("MAPSTAR_HIGH_SCORE");
        if (data !== null) {
            setGameState(prevGameState => (
                {
                    ...prevGameState,
                    hiScore: JSON.parse(data),
                }
            ))
        }
    },[])

    useEffect(() => {
        if (gameState.scores.length > 0) {
            var ath = Math.max(...gameState.scores)
            if (ath > gameState.hiScore) {
                setGameState(prevGameState => (
                    {
                        ...prevGameState,
                        hiScore: ath,
                    }
                ))
                window.localStorage.setItem("MAPSTAR_HIGH_SCORE", JSON.stringify(ath))
            }
        }
    },[gameState])
    
    return (
        <div className="p-safe w-screen min-h-screen bg-raisin text-lavblush">
            <Header streak={gameState.streak} hiScore={gameState.hiScore}/>
            <Popup score={gameState.streak} turn={gameState.turn} onButtonClick={restart} />
            <Map data={data} answer={answer} />
            <MultipleChoice data={data} list={choices} answer={answer} onButtonClick={userInput} />
            <Footer />
        </div>
    );
}

export default App;
