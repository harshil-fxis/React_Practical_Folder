import React, {useReducer} from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterReducerMethod() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <div>count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounterReducerMethod
