import React from 'react';

export default function TitelBar02() {
    const onClickHandeler = () => {
        console.log("click titlebar02!");
    }

    return (
        <h1 
            onClick={onClickHandeler}
            style={{cursor:'pointer'}}>ex03 - Functional Event Handler(Functional Component)</h1>
    );
}