import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

const ParentFive = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Harshil')

    const person = {
        fname: 'Harshil',
        lname: 'Vaja'
    }
    const MemoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}
    const MemoizedHandleClick = useCallback(() => handleClick, [])

    console.log('ParentFive Render')
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Vaja')}>Change Name</button>
      {/* <MemoizedChildFive name={name} person={MemoizedPerson}/> */}
      <MemoizedChildFive name={name} handleClick={MemoizedHandleClick}/>
    </div>
  )
}

export default ParentFive