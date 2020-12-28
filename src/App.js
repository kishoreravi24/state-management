 import React from 'react';
 import {useSelector, useDispatch} from 'react-redux';
 import {increment, decrement, log, log1 } from './actions/index';

function App() {

  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello world</h1>
      <br/>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>&nbsp;<button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(log())}>show_val</button>
      <button onClick={() => dispatch(log1())}>not show the val</button>
      <br/>
      {logged ? (
        <h1>Important message</h1>
      ) : "" }
    </div>
  );
}

export default App;
