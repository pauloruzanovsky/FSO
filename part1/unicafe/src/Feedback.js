import React from 'react';
import Button from './Button';

function Feedback({handleClick}) {
    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" handleClick={handleClick}/>
            <Button text="neutral" handleClick={handleClick}/>
            <Button text="bad" handleClick={handleClick}/>

        </div>
    );
}

export default Feedback;