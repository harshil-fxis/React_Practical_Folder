import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterDocChange from './components/HookCounterDocChange';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching'
import ComponentC from './components/ComponentC';
import React, { useReducer } from 'react';
import CounterReducerMethod from './components/CounterReducerMethod';
import CounterTwoReducerMethod from './components/CounterTwoReducerMethod';
import CounterThreeReducerMethod from './components/CounterThreeReducerModel';
import CompoA from './components/CompoA';
import CompoB from './components/CompoB';
import CompoC from './components/CompoC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
      <div className="App">
        count = {count}
        <CompoA />
        <CompoB />
        <CompoC />
        {/* <CounterThreeReducerMethod /> */}
        {/* <CounterTwoReducerMethod /> */}
        {/* <CounterReducerMethod /> */}
        {/* <UserContext.Provider value={'Harshil'}>
          <ChannelContext.Provider value={'Vaja'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <HookCounterDocChange /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
