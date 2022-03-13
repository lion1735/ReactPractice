import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
////////////////////////////////////////////////////////////////////
//react-router-dom 설치
//react-router-dom@5.3.0 이 버젼없이 되면서 Switch -> Routes로 대체되었다.
//자식 컴포넌트를 element 태그에 할당하도록 변경되었다.
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
