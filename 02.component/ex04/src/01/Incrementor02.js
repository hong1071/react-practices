import React, {useState} from 'react';

// 함수형 컴포넌트에서 state 처리하는 방법

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin);

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            <button>
                <strong>-</strong>
            </button>
        </div>
    );
}