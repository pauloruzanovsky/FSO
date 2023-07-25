import React from 'react';

function Filter({filteredValue, handleFilter}) {
    return (
        <div>
             <h2>Phonebook</h2>
            <div>filter shown with <input type='text' value={filteredValue} onChange={handleFilter}/></div>
        </div>
    );
}

export default Filter;