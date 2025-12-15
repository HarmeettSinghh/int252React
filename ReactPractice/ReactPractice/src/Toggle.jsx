import React from 'react'

const Toggle = () => {
    const[toggle , settoggle] = React.useState(false);
  return (
    <div>
       <h2>Toggle: {toggle ? "on" : "off"}</h2>
       <button on onClick={()=>settoggle(!toggle)}>
        {toggle ? "Turn off":"Turn on"}
       </button>
    </div>
  )
}

export default Toggle
