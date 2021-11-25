import React from 'react';

const App = function(){
    // const app = React.createElement('h1', null, 'Hello World');
    // return app;
    const message = 'Hello World';
    return (
        // 이것을 컴포넌트라고 한다!
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export {App};