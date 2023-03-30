import React from "react";
import MapViewer from "../components/MapViewer";
import { CSV } from "../locations.js"
import { useState } from "react";
import MultipleChoice from "./MultipleChoice";

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
const choices = getChoices(data.length, 4)
const answer  = choices[Math.floor(Math.random() * (choices.length))]

console.log(choices)
console.log(answer)

export default function Map() {
    // logic to select location
    //const [index, setIndex] = useState(0);
    const [hiScore, setHiScore] = useState(0);

    // const nextLocation = () => {
    //     setHiScore(hiScore + 1)
    //     if (index < data.length - 1) {
    //         setIndex(index + 1);
    //     }
    // }

    // const prevLocation = () => {
    //     if (index > 0) {
    //         setIndex(index - 1);
    //     }
    //     if (hiScore > 0) {
    //         setHiScore(hiScore - 1)
    //     }
    // }
    console.log(data[answer].country)
    return (
        <div className="">
            <div className="flex justify-center text-xl tracking-wide font-semibold text-white -mt-3 mb-2">
                high score: {hiScore}
            </div>
            <div className="">
                <MapViewer imageId={data[answer].imageId} />
            </div>
            {/* <div className="flex justify-between">
                <button className="w-1/2 py-1 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900"
                    onClick={prevLocation}
                // disabled={index === 0}
                >
                    prev
                </button>
                <button className="w-1/2 py-1 mx-1 my-2 text-white rounded border bg-slate-800 hover:bg-slate-900"
                    onClick={nextLocation}
                // disabled={index === data.length - 1}
                >
                    next
                </button>
            </div> */}
            <MultipleChoice data={data} list={choices} />
        </div>
    );
}
