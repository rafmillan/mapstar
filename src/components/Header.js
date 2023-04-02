import React from "react";
import Modal from "./Modal"

export default function Header({hiScore, scores}) {
    let ath = Math.max(...scores)
    return (
        <div className="flex flex-col-2 justify-between pb-1 tracking-wider">
            <div className="px-5 text-3xl font-semibold">
                mapstar
            </div>
            <Modal currentStreak={hiScore} allTimeHigh={ath}/>
            <div className="px-5 text-3xl font-semibold">
                streak: {hiScore}
            </div>
            
        </div>
    );
}
