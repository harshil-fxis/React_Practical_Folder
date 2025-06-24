import React, { useContext } from 'react'
import { CountContext } from '../App'

function CompoA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component A - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompoA
