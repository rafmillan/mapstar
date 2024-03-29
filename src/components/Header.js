import React from "react";
import Modal from "./Modal"

export default function Header({streak, hiScore}) {
    return (
        <div className="flex flex-col-2 justify-between pb-1 tracking-wider">
            <div className="px-5 text-3xl font-bold">
                mapstar
            </div>
            <Modal currentStreak={streak} allTimeHigh={hiScore}/>
            <div className="px-5 text-3xl font-bold">
                streak: {streak}
            </div>
            
        </div>
    );
}
