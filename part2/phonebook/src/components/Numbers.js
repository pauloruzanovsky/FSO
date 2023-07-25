import React from 'react';

function Numbers({personsFiltered, handleDelete}) {
    return (
        <div>
            <h2>Numbers</h2>
             { personsFiltered } 
        </div>
    );
}

export default Numbers;