import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/'
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Counter is at: {counter}</p>
      <button onClick={() => dispatch(increment(5))} type="button">+</button>
      <button onClick={() => dispatch(decrement())} type="button">-</button>
      <p>isLogged: { isLogged ? 'Is Logged In' : 'No access' }</p>
    </div>
  );
}

export default App;
