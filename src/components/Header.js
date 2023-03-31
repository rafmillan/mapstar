import React from "react";

export default function Header({hiScore}) {
    return (
        <div>
            <div className="text-3xl text-white font-semibold tracking-wide text-center py-4">
                mapstar
            </div>
                <div className="flex justify-center text-xl tracking-wide font-semibold text-white -mt-3 mb-2">
                streak: {hiScore}
            </div>
        </div>
    );
}
