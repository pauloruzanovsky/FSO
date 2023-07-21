import React from 'react';
import Part from './Part'

function Content({ parts }) {
    const partsElements = parts.map((part) => {
        return <Part key={part.name} part={part.name} exercises={part.exercises} />
    })

    return (
        <div>
            {partsElements}
        </div>
    );
}

export default Content;