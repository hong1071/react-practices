import React, {Fragment} from 'react';

import TitleBar01 from './TitleBar01';
import TitleBar02 from './TitleBar02';

export default function () {
    return (
        <Fragment>
            <TitleBar01 title={'titlebar01'}/>
            <TitleBar02 />
        </Fragment>
    );
}