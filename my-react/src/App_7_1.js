import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  // console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit} className="col-auto">
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          className="w-50 m-3"
        />
        <button className="btn btn-danger">Add To Do</button>
      </form>
      <hr />
      <ul className="list-group">
        {toDos.map((item, idx) => (
          <li key={idx} classNam="list-group-item">
            <button type="button" className="btn btn-close" aria-label="Close"></button>
            {item}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
