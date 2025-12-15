import React, { useState } from 'react'


//rapc shortcut
const usestateExample = props => {
    const [count, setCount] = useState(0);
    const incre = ()=>{
        setCount((preVal)=>{
        return preVal+1
    });
    }
    const decre = ()=>{
        setCount(preVal=>preVal-1)
    }



    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>

        </div>
    )
}

usestateExample.propTypes = {

}

export default usestateExample
