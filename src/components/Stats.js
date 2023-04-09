import React from "react";

export default function Stats({ currentStreak, allTimeHigh }) {
    return (
        <div className="">
            <div className="grid grid-cols-2 text-lavblush py-5">
                <div className="grid grid-rows-2">
                    <div className="text-6xl flex justify-center">
                        {currentStreak}
                    </div>
                    <div className="text-md flex justify-center">
                        current streak
                    </div>
                </div>
                <div className="grid grid-rows-2">
                    <div className="text-6xl flex justify-center">
                        {allTimeHigh}
                    </div>
                    <div className="text-md flex justify-center">
                        all time high
                    </div>
                </div>
            </div>
        </div>
    );
}
