import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(){
        super(...arguments);
        //this.no = 0;
        this.state = {
            no: 0
        }
    }

    onClickHandler(){
        //this.no++;                            // 렌더 일어나지 않음
        this.setState({
            no: this.state.no +1                // 렌더가 동시에 일어남
        })
        console.log("TitleBar01 clicked");
    }

    render() {
        return (
            <h1 
                onClick = { this.onClickHandler.bind(this) }
                style={{cursor:'pointer'}}>
                    ex03 - Functional Event Handler(Functional Component),
                    {
                        //${this.no}, 
                        this.state.no
                    }
            </h1>
        )
    }
}