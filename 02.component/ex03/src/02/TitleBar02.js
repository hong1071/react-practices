import React, { useState } from 'react';

export default function TitelBar02() {

    const [num, setNum] = useState(0);

    const onClickHandeler = () => {
        console.log("click titlebar02!");
        setNum(num + 1);
    }

    const style = {
        cursor:'pointer',
        background: '#9987'
    }

    return (
        <h1 
            onClick={onClickHandeler}
            style={style}>ex03 - Functional Event Handler(Functional Component), {num} </h1>
    );
}