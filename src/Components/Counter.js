import React, { useReducer } from 'react'


const intialState =0;
const reducer=(state,action)=>{

    switch(action){
        case 'increment':
        return state+1;

        case 'decrement':
        return state-1;

        case 'reset':
        return state;

       default:
        return state;

    }
}
export default function Counter() {
    const[count,dispatch]=useReducer(reducer,intialState);
  return (
    <div>
        <p>Count :{count}</p>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
