import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [Like, setLike] = useState(0);
   useEffect(()=>{
    console.log("The component is mounted")
   },[]); // [] wont repeat mounting again and again when like is pressed , otherwise mounting
   //will be done againg and again
    const changeLike = () =>{
        setLike((pre)=>pre+1);
    }
    //Component lifecycle
    //initialization
    //mounting
    //updation
    //unmounting
  return (
    <div>
      <h1>Likes: {Like}</h1>
      <br />
      <button onClick={changeLike}>Like</button>
    </div>
  )
}

export default UseEffect
