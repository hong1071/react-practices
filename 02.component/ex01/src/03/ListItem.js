import React from 'react';

export default function ListItem({name, quantity}) {
    
    return(
        <ul>
            <li>{name}: {quantity}</li>
        </ul>
    )

}

