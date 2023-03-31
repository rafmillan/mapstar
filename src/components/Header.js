import React from "react";

export default function Header({hiScore}) {
    return (
        <div className="flex flex-col-2 justify-between pb-2 tracking-wider">
            <div className="px-5 text-3xl text-white font-semibold">
                mapstar
            </div>
            <div className="px-5 text-3xl text-white font-semibol">
                streak: {hiScore}
            </div>
        </div>
    );
}
