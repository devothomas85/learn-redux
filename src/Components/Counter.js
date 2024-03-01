import { useSelector, useDispatch } from "react-redux";
import { decrease_count, increase_count } from "../Redux/count/countSlice";
function Counter() {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  const onIncreament = () => {
    dispatch(increase_count());
  }
  const onDecrement = () => {
    dispatch(decrease_count());
  };
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={onIncreament}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </div>
  );
}

export default Counter;
