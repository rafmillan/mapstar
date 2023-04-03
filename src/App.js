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
    const [streak, setStreak] = useState(0);
    const [turn, setTurn] = useState(1);
    const [history, setHistory] = useState([]);
    const [scores, setScores] = useState([]);
    const [hiScore, setHiScore] = useState(0);

    function restart() {
        setScores([...scores, streak])
        setStreak(0)
        setTurn(1)
        setHistory([])
        choices = getChoices(data.length, 4)
        answer = choices[Math.floor(Math.random() * (choices.length))]
    }

    function userInput(id) {
        setHistory([...history, answer])
        let answerId = data[answer].id
        if (id === answerId) {
            setStreak(streak + 1)
            setTurn(turn + 1)
            choices = getChoices(data.length, 4)
            answer = choices[Math.floor(Math.random() * (choices.length))]
            while (history.includes(answer)) {
                if (history.length === data.length) {
                    setHistory([])
                    break
                }
                answer = choices[Math.floor(Math.random() * (choices.length))]
            }

        } else {
            setTurn(0)
        }
    }
    useEffect(() => {
        const data = window.localStorage.getItem("MAPSTAR_HIGH_SCORE");
        if (data !== null) {
            setHiScore(JSON.parse(data))
        }
    },[])

    useEffect(() => {
        if (scores.length > 0) {
            var ath = Math.max(...scores)
            console.log(ath)
            if (ath > hiScore) {
                setHiScore(ath)
                window.localStorage.setItem("HIGH_SCORE", JSON.stringify(ath))
            }
        }
    },[scores])
    
    return (
        <div className="p-safe w-screen min-h-screen bg-raisin text-lavblush">
            <Header streak={streak} hiScore={hiScore}/>
            <Popup score={streak} turn={turn} onButtonClick={restart} />
            <Map data={data} answer={answer} />
            <MultipleChoice data={data} list={choices} answer={answer} onButtonClick={userInput} />
            <Footer />
        </div>
    );
}

export default App;
