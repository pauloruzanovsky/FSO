import React from 'react';

function Person({ person, handleDelete }) {
    return (
        <div>
            <div>{person.name} {person.number} <button onClick={() => {handleDelete(person.id)}}>delete</button></div>
            
        </div>
    );
}

export default Person;