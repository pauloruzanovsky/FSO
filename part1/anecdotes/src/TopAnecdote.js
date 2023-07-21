import React from 'react';

function TopAnecdote({anecdotes, points}) {
    const largestArrayValue = Math.max(...points);
    const indexOfLargestArrayValue = points.indexOf(largestArrayValue);
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[indexOfLargestArrayValue]}</div>
        </div>
    );
}

export default TopAnecdote;