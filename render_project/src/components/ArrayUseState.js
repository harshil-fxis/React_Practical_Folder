import React, { useState } from 'react'

const initState = ['Harshil','Vaja']

const ArrayUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        const newPerson = [...person]
        newPerson.push('Nick')
        newPerson.push('John')
        setPerson(newPerson)
    }
    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>Click</button>
      {
        person.map(person => (
            <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}

export default ArrayUseState