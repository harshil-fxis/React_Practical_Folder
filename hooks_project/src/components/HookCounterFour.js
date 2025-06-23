import React, { useState }from 'react'

function HookCounterFour() {

    const [items, setItems] = useState([])
    
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            valu: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
    <div>
        <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.valu}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour
