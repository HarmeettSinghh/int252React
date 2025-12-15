import React from 'react'

export default function List2(props) {
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map(item => <li key ={item.id}>
                                          {item.name}: &nbsp;
                                          <b> {item.calories}</b>
  </li>)
  return (
    <div>
      <h3 className='listhead'>{category}</h3>
      <ol className='listitem'>{listItems}</ol>
    </div>
  )
}
List2.defaultProps= {
  category: "Category",
  items: [],

}
