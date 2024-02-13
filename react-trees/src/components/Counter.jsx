import { useState } from "react";

export default function Counter() {
  const [myCounterState, setMyCounterState] = useState(0);
  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }
  return (
    <div>
      <p>{myCounterState}leaves</p>
      <button onClick={incrementCounter}>get another leaf</button>
    </div>
  );
}
