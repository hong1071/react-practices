import React, { Fragment, Component } from 'react';
import Header from './header';
import Content from './content';

// 03의 표현식과 비교해야함
export default class extends Component{
    render(){
        return (
            <Fragment>
                <Header />
                <Content />
            </Fragment>
        )
    }
}