import React from 'react';

function Button({selectRandomAnecdote}) {
    return (
        <button onClick={selectRandomAnecdote}>
            next anecdote 
        </button>
    );
}

export default Button;