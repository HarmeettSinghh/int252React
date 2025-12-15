import React from 'react'

export default function List() {
    const fruits = [{ id:1,name: "apple" , calories:95},
        {id:2,name: "orange", calories:45},
        {id:3,name: "banana", calories:105},
        {id:4,name:"coconut", calories:159},
        {id:5,name:"pineapple",calories:37}];
    // fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphabatecial
    // fruits.sort((a,b)=>b.name.localeCompare(a.name)); //reverse alphabatecial
    // fruits.sort((a,b)=>a.calories - b.calories); //NUMERIC
    fruits.sort((a,b)=>b.calories-a.calories); //revrese numeric
    const lowCalFruits = fruits.filter(fruit=>fruit.calories<100);
//     lowCalFruits is an array of objects, not JSX elements.

// React cannot render raw objects → so the <ol> becomes empty or broken.

// You need to map it exactly like you mapped the first list.
    const lowCalItems = lowCalFruits.map(fruit=>(
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
        </li>
    ))
    const listItems = fruits.map(fruit => <li key= {fruit.id}>
        {fruit.name}: &nbsp; 
        <b>{fruit.calories}</b></li> );
    return (<div>
        <ol>{listItems}</ol>
        <h2>Low Calories Fruis</h2>
        <ol>{lowCalItems}</ol>
    </div>)
        
}
