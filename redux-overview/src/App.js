import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Learn Redux </h1> 
      <h2>counter is {counter}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick ={()=> dispatch(decrement(5))}>-</button>
    </div>
  );
}

export default App;
