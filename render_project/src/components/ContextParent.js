import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChild'


export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <CountProvider value={count}>
        {children}
      </CountProvider>
    </div>
  )
}

export default ContextParent