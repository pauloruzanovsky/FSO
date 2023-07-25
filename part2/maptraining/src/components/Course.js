import React from 'react';
import Part from './Part'

function Course({ course }) {
    
    const partsElement = course.parts.map(part => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />
    })

    const total = course.parts.reduce((carry, part) => carry + part.exercises,0)

    return (
        <div>
            <h1>{course.name}</h1>
            {partsElement}
            <b>total of {total} exercises</b>
        </div>
    );
}

export default Course;