import React from 'react';

function Anecdote({anecdotes, selected, points}) {
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <div>has {points[selected]} votes </div>
        </div>
    );
}

export default Anecdote;