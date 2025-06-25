import React, { useState } from 'react'

const initState = {
    fname: 'Harshil',
    lname: 'Vaja'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        const newPerson = {...person}
        newPerson.fname = 'Nick'
        newPerson.lname = 'John'
        setPerson(newPerson)
    }
    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
