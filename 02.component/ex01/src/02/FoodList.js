import React, { Component } from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component {
    render(){
        const components = [];
        // for(let i=0;i<FoodList.length;i++){
        //     components[i] = <ListItem name={foods[i].name} quantity={foods[i].quantity}/>
        // }    좋지 않은 코드!
        
        // this.props.foods.forEach(function(food, index){
        //     components[index] = <ListItem name={food.name} quantity={food.quantity}/>
        //     components.push(<ListItem name={food.name} quantity={food.quantity}/>);
        // });

        // const r = [1, 2, 3, 4].map(function(e){
        //     return e * e;
        // })
        // console.log(r);

        const r = this.props.foods.map( (food) => <ListItem name={food.name} quantity={food.quantity}/>);

        return(
            <ul>
                { this.props.foods.map( (food) => <ListItem name={food.name} quantity={food.quantity}/>) }
            </ul>
        )
    }
}