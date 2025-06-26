import React, { useState } from 'react'
import {MemoizedChildTwo} from './ChildTwo'

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Harshil')

    console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Vaja')}>Change Name</button>
      <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo