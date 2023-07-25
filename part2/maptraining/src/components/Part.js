import React from 'react';

function Part({name, exercises}) {
    return (
        <div>
            {name} {exercises}
        </div>
    );
}

export default Part;