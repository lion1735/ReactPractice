import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
////////////////////////////////////////////////////////////////////
//:id 로 변수를 가지고 url을 조작하기
// Detail.js에서 url의 id값 읽어오기
//
////////////////////////////////////////////////////////////////////
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
