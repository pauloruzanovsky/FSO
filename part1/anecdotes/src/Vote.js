import React from 'react';

function Vote({vote}) {
    return (
        <button onClick={vote}>
            vote 
        </button>
    );
}

export default Vote;

