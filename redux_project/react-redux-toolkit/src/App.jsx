import { useState } from 'react';
import './App.css'
import { decrement, increment, incrementAmount, reset } from './feature/counter/CounterSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncrementAmountClick() {
    dispatch(incrementAmount(amount));
  }
  

  return (
    <div>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br/>
      <br/>
      <button onClick={handleResetClick}> Reset </button>
      <br/>
      <br/>
      <input type='Number' value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={handleIncrementAmountClick}>Inc by Amount</button>
    </div>
  )
}

export default App
