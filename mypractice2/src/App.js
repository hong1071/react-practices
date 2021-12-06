import React, {Fragment} from 'react';
import Contents from './Contents';
import Header from './Header';

import './assets/css/Header.css';
import Footer from './Footer';

const App = () => {

    const hawui = '하위';
    const noHawui = '안 하위';

    return (
        <Fragment>
            <Header header={hawui}/>
            <Contents contents={noHawui}/>
            <br />
            
            <Header header={noHawui}/>
            <Contents contents={hawui}/>
            <br />

            <Footer />
        </Fragment>
    )
}

export default App;