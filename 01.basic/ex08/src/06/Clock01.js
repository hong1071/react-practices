import React from 'react';

export default function(){

    const date = new Date();

    let hours = date.getHours();
    let minutes = ( '0' +date.getMinutes()).slice(-2);
    let seconds = ( '0' +date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12){
        session = 'PM';
    }

    return (
        <div>
            {hours} : {minutes} : {seconds} {session}
        </div>
    )
}