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
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextprovider } from './components/context/UserContext';
import { Mutableref } from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';
import { CounterOne } from './components/class/CounterOne';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/randomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/ButtonOne';
import { CustomerComponent } from './components/html/CustomComponent';
import { Text } from './components/polymophic/Text';
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
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='seconadry'>Label</Text>
      {/* <CustomerComponent name='Harshil' isLoggedIn={true}/> */}
      {/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton> */}
      {/* <Toast position='left-top'/> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <List items={['Harshil','Jack','Nick','Reem']} onClick={(item) => console.log(item)}/> */}
      {/* <List items={[
        {
          id:1,
          first: 'Harshil',
          last: 'Vaja',
        },
        {
          id:2,
          first: 'Nick',
          last: 'John',
        },
        {
          id:3,
          first: 'Reem',
          last: 'Kent',
        }
      ]} 
      onClick={(item) => console.log(item)}/> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <CounterOne message='The count value is'/> */}
      {/* <Mutableref/>
      <DomRef/> */}
      {/* <UserContextprovider>
        <User />
      </UserContextprovider> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <Counter/> */}
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
