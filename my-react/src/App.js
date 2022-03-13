import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
////////////////////////////////////////////////////////////////////
// npm run build : 리액트를 압축해서 build 폴더 생성
// package.json 에 깃허브 url 압축하기
////////////////////////////////////////////////////////////////////
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
