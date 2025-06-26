import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status'
import { Heading } from './components/heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/LoggedIn';
import { User } from './components/User';
import { Counter } from './components/Counter';
function App() {
  const personName = {
    first: 'Harshil',
    last: 'Vaja'
  }
  const personList = [
    {
      first: 'Harshil',
      last: 'Vaja'
    },
    {
      first: 'Nick',
      last: 'John'
    },
    {
      first: 'rock',
      last: 'Marsh'
    }
  ]
  return (
    <div className="App">
      <Counter/>
      {/* <User /> */}
      {/* <LoggedIn /> */}
      {/* <Person name={personName}/>
      <PersonList name={personList}/> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <Input  value='' handleChange={event => console.log(event)}/> */}
      {/* <Button handleClick={(event, id) => {
        console.log('Button Click', event , id)
      }}/> */}
      {/* <Greet name='Harshil' isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList name={personList}/>
      <Status status={'success'}/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Harshil Vaja!</Heading>
      </Oscar> */}
    </div>
  );
}

export default App;
