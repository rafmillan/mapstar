import React from "react";

const MultipleChoice  = ({ data, list }) => {
    return (
        <div className="grid grid-cols-2 gap-1 py-1 px-1">
            {list.map((item, index) => (
                <div className="flex justify-center py-6 text-lg text-white rounded  bg-slate-800 hover:bg-slate-900" key={index}>
                  {data[item].country}        
                </div>
            ))}
        </div>
    );
};

export default MultipleChoice;