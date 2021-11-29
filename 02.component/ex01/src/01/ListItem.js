import React, { Component } from 'react';

export default class ListItem extends Component {
    render(){
        return(
            <ul>
                <li>{this.props.name}: {this.props.quantity}</li>
            </ul>
        )
    }
}