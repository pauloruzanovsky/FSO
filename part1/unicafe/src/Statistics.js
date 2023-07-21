import React from 'react';
import StatisticLine from './StatisticLine';

function Statistics({good, neutral, bad, total, average, positive}) {
    return (
        <div>
            <h1>Statistics</h1>
            {total > 0 ? <table>
                <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={total}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive" value={positive}/>
                </tbody>
            </table> : <div>no feedback given</div>}
        </div>
    );
}

export default Statistics;