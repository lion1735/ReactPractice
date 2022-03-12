import { useEffect, useState } from "react";

function Hello() {
  //1. 함수로 선언하기
  function destroyedFn() {
    console.log("Bye!");
  }
  function effectFn() {
    console.log("Hi!");
    return destroyedFn;
  }
  //2. useEffect 내에 함수로 실행하기
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bi :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
