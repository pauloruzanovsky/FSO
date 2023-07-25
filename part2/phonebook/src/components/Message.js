import React from 'react';
import './style.css'

function Message({message}) {
    return (
        <div className='message'>
            {message}
        </div>
    );
}

export default Message;