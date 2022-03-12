import { useEffect, useState } from "react";

// (10)onClick -> (6)onClick -> setCnt -> prev+1 -> cnt -> (9) <h1> {cnt} </h1>
function App() {
  const [cnt, setCnt] = useState(0);
  const onClick = () => setCnt((prev) => prev + 1);
  console.log("i run all the time"); //console.log 한 번만 실행하기?
  //1. 한 번 실행하기
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // };
  // useEffect(iRunOnlyOnce, []); //user Effect : 한 번만 실행하기
  //2. 한 번 실행하기 - 간소화
  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  return (
    <div>
      <h1>{cnt}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
