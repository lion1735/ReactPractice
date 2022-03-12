import { useEffect, useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCnt((prev) => prev + 1);

  //input 값이 바뀌었을때 실행될 함수
  const onChange = (event) => setKeyword(event.target.value);

  //항상 실행하기
  // console.log("i run all the time");

  //한 번만 실행하기 -> [] 안에 변화되는 데이터가 없기때문에 바뀔일이 없다.
  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  //keyword가 변화할때만 실행하기 [] <- 변화를 감지할 변수를 넣기
  useEffect(() => {
    if (keyword !== "" && cnt > 5) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);
  //cnt 변화할때만 실행하기
  useEffect(() => {
    console.log("I run when 'cnt' changes", cnt);
  }, [cnt]);

  //cnt 혹은 keyword 가 변화할때 실행하기
  useEffect(() => {
    console.log("I run when 'cnt&keyword' changes", cnt, keyword);
  }, [cnt, keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{cnt}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
