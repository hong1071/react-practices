import React, {Fragment} from 'react';
import Clock01 from './Clock01.js';
import Clock02 from './Clock02.js';

export default function(){
    return (
        <Fragment>
            <p>{ `JSX Tutorials - 특징 3: JSX 표현식 표기법{expression}과 문제점` }</p>
            <Clock01 />
            <Clock02 />
        </Fragment>
    );
}