
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice.tsx';

function Counter() {
  const count = useSelector((state: any) => state.counter.value); // get state
  const dispatch = useDispatch(); // to send actions

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;
