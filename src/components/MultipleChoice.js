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
        <div className="grid grid-cols-2 gap-1 py-1 px-1">
            {list.map((item, index) => (
                <button 
                    className="flex justify-center py-6 text-xl rounded bg-indigo active:bg-indigodark"
                    key={index}
                    onClick={() => handleClick(data[item].id)}>
                  {data[item].city}, {data[item].country}        
                </button>
            ))}
        </div>
    );
};

export default MultipleChoice;