import React from "react";

const MultipleChoice  = ({ data, list, answer, onButtonClick}) => {
    MultipleChoice.defaultProps = {
        onButtonClick: () => { },
    };

    const handleClick = (id) => {
        // Potential...
        // let answerId = data[answer].id
        // if(id === answerId) {
        //     console.log('Correct!')
        // } else {
        //     console.log('Wrong..')
        // }
        onButtonClick(id);
    }

    return (
        <div className="min-h-max h-60 grid grid-cols-2 gap-1 mt-1 p-1">
            {list.map((item, index) => (
                <button 
                    className="h-50vw flex items-center justify-center text-xl font-semibold rounded bg-red-500 active:bg-red-700"
                    key={index}
                    onClick={() => handleClick(data[item].id)}>
                  {data[item].city}, {data[item].country}        
                </button>
            ))}
        </div>
    );
};

export default MultipleChoice;