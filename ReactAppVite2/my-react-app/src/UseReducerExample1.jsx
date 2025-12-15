import React, { useReducer } from 'react'

const UseReducerExample1 = () => {
    const initialCartState = {count:0}
    const reducerCart = (state,action)=>{
        switch(action.type){
            case 'addcart':
                return {count:state.count+1};
            case 'removecart':
                return {count:state.count-1};
            case 'resetcart':
                return initialCartState;
            default:
                return state;
        }
        
    }
    
    const [cartState , dispatchCart] = useReducer(reducerCart, initialCartState);
  return (
    <div>
      <h2>Cart: {cartState.count} </h2>
      <button className='addToCart' onClick={() => dispatchCart({type: 'addcart'})}>Add to Cart</button>
      <button  className='removeFromCart' onClick={()=> dispatchCart({type:'removecart'})}>Remove From Cart</button>
      <button  className='resetCart' onClick={()=>dispatchCart({type: 'resetcart'})}>Reset Cart</button> <br />
      <button>Apply Discount</button>
      <button>Remove Discount</button>

    </div>
  )
}

export default UseReducerExample1
