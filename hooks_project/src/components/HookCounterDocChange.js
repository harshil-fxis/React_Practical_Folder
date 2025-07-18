import React ,{ useEffect, useState }from 'react'

function HookCounterDocChange() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('UseEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} value</button>
    </div>
  )
}

export default HookCounterDocChange
