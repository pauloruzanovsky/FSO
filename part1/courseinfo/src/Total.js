import React from 'react';

function Total({parts}) {
    return (
        <p>Number of exercises {parts.reduce((carry, part) => carry + part.exercises,0)}</p>
    );
}

export default Total;