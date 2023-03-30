import React from "react";

const MultipleChoice  = ({ data, list }) => {
    return (
        <div className="grid grid-rows-4 gap-2 max-w-50 py-5 px-5">
            {list.map((item, index) => (
                <div className="flex justify-center py-10 text-4xl text-white border rounded  bg-slate-800 hover:bg-slate-900" key={index}>
                  {data[item].country}        
                </div>
            ))}
        </div>
    );
};

export default MultipleChoice;