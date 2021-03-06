import React, { Component } from 'react';

// 클래스형 컴포넌트에서 state 처리하는 방법

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

    onClickPlusButton(e){
        // this.state.value = this.state.value + this.props.step; 쓰지 않기
        this.setState({
            val: this.state.val + this.props.step
        })
        console.log(this.state.val + " " + this.props.step);
    }

    onClickMinusButton(e){
        this.setState({
            val: this.state.val - this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickPlusButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={this.onClickMinusButton.bind(this)}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}
