import React, {useState} from 'react';

// 함수형

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);
    const [stateStep] = useState(step);

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + stateStep);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
        </div>
    );
}