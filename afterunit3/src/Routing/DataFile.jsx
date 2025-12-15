import React from 'react'

const DataFile = () => {
    const queryparam = new URLSearchParams(window.location.search);
    const name = queryparam.get('name');
    const regno = queryparam.get('regno');

  return (
    <div>
        <h2>This is Data File</h2>
        <p>Name: {name}</p>
        <p>Regno: {regno}</p>
      
    </div>
  )
}

export default DataFile
