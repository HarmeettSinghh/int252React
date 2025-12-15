import React from 'react'
import List2 from '../../ReactPractice/ReactPractice/src/List2';

export default function Employees(props) {
  const details = props.details;
  const name = details.map(detail=> <div className='parent'>
    <li className='cardd' key={detail.id}>
    Id: {detail.id} <br />
    Name: {detail.name} <br />
    Role: {detail.role} <br/>
     City: {detail.city}
   </li> </div>)
  return (
    <div className='cards'>
        <h2>Employee Detail Cards: </h2>
      <ul >{name}</ul>
    </div>
  )
}
