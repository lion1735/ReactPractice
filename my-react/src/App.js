import { useState } from "react";

// (10)onClick -> (6)onClick -> setCnt -> prev+1 -> cnt -> (9) <h1> {cnt} </h1>
function App() {
  const [cnt, setCnt] = useState(0);
  const onClick = () => setCnt((prev) => prev + 1);
  console.log("render"); //console.log 한 번만 실행하기?
  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
