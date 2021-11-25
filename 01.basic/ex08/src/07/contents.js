import React, {Fragment} from 'react';
import Clock from './Clock.js';

export default function(){
    return (
        <Fragment>
            <p>{ `JSX Tutorials - Dynamic HTML Rendering` }</p>
            <Clock />
        </Fragment>
    );
}