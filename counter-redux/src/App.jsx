import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";
function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);

  return (
    <>
      <h1>App</h1>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>Artır</button>
        <button onClick={() => dispatch(increment())}>azalt</button>
      </div>
    </>
  );
}

export default App;
