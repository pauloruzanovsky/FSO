import React from 'react';

function NewPersonForm({newName, setNewName, newNumber, setNewNumber, handleAddPerson, message}) {
    return (
        <div>
            <h2>add a new person</h2>
            <form>
                <div>name: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
                <div>number: <input type='tel' value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/></div>
                <div>
                <button onClick={handleAddPerson} type="submit">add</button>
                </div>
            </form>
        </div>
    );
}

export default NewPersonForm;